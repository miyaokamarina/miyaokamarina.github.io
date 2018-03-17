const topClass = Reflect.getPrototypeOf(Object);
const topObject = Reflect.getPrototypeOf({});

const isTop = x => x === topClass || x === topObject || x === null;

/**
 * Get object's hierarchy
 *
 * @param {*} c target object.
 * @returns {*[]}
 */
export const supers = c => {
  let c$ = c;
  const result = [];

  while (!isTop(c$)) {
    result.push(c$);
    c$ = Reflect.getPrototypeOf(c$);
  }

  return result.reverse();
};
