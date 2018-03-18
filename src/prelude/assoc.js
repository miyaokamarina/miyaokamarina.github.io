import { curry } from 'prelude/curry';
import { map } from 'prelude/map';

import { isArray } from 'prelude/pred/isArray';
import { isPrimitive } from 'prelude/pred/isPrimitive';
import { isString } from 'prelude/pred/isString';

import { match } from 'prelude/types/Match';

// TODO: Handle other indexed structures.
// TODO: Handle maps.

const assocArray = (focus, value, target) => [...target.slice(0, focus), value, ...target.slice(focus + 1)];

export const assoc = curry((focus, maybeValue, target) => map(value => match(target).of(
  [isArray, () => assocArray(focus, value, target)],
  [isString, () => assocArray(focus, value, [...target]).join('')],
  [() => !isPrimitive(target), () => ({ ...target, [focus]: value })],
).else({ [focus]: value }), maybeValue));
