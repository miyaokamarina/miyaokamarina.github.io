import { curry } from 'prelude/curry';

import { isArray } from 'prelude/pred/isArray';
import { isPrimitive } from 'prelude/pred/isPrimitive';
import { isString } from 'prelude/pred/isString';

import { match } from 'prelude/types/Match';
import { Just, Nothing } from 'prelude/types/Maybe';

// TODO: Use `lt` and `add` functions.

const propArray = (focus, target) => {
  const focus$ = focus < 0 ? target.length + focus : focus;

  if (focus$ in target) {
    return Just(target[focus$]);
  }

  return Nothing;
};

const propObj = (focus, target) => {
  if (focus in target) {
    return Just(target[focus]);
  }

  return Nothing;
};

// TODO: Add more types.
// TODO: Add `Keyed` typeclass with `key` method?

export const prop = curry((focus, target) => match(target).of(
  [isArray, () => propArray(focus, target)],
  [isString, () => propArray(focus, [...target])],
  [() => !isPrimitive(target), () => propObj(focus, target)],
));
