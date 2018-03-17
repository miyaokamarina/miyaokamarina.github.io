import { supers } from 'prelude/supers';

/**
 * List all keys (including inherited) of some object
 *
 * Excludes `name`, `length` and `prototype` keys of functions
 * and `constructor` key of objects.
 *
 * @param {*} a target object.
 * @returns {(string | symbol)[]}
 */
export const keys = a => [
  ...new Set(supers(a).reduce((result, b) => {
    if (typeof b === 'function') {
      const s = new Set(Reflect.ownKeys(b));

      s.delete('name');
      s.delete('length');
      s.delete('prototype');

      return [...result, ...s];
    }

    const s = new Set(Reflect.ownKeys(b));

    s.delete('constructor');

    return [...result, ...s];
  }, [])),
];
