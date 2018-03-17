import { $IsCurried } from 'prelude/_symbols';

const curried = (total, f, length, acc) => {
  const result = function curried$(...as) {
    const combined = acc.concat(as);

    return combined.length >= total ? f.apply(this, combined) : curried(total, f, length - combined.length, combined); // eslint-disable-line
  };

  const name = `${f.name || '<anonymous>'}/${length} (${total})`;
  const source = `/* ${name} */ ${f.toString()}`;

  Reflect.defineProperty(result, $IsCurried, { value: true });
  Reflect.defineProperty(result, 'length', { value: length });
  Reflect.defineProperty(result, 'name', { value: name });
  Reflect.defineProperty(result, 'toString', { value: () => source });

  return result;
};

/**
 * Curry a function
 *
 * TODO: `curryN`.
 * TODO: `memoize`.
 *
 * @param {Function} f target function.
 * @returns {Function}
 */
export const curry = f => {
  if (f[$IsCurried] === true) {
    return f;
  }

  if (f.length === 0) {
    const name = `${f.name || '<anonymous>'}/0 (0)`;
    const source = `/* ${name} */ ${f.toString()}`;

    Reflect.defineProperty(f, $IsCurried, { value: true });
    Reflect.defineProperty(f, 'name', { value: name });
    Reflect.defineProperty(f, 'toString', { value: () => source });

    return f;
  }

  const result = curried(f.length, f, f.length, []);

  return result;
};
