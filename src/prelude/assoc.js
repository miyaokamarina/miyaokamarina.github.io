import { curry } from 'prelude/curry';

import { isArray } from 'prelude/pred/isArray';
import { isVal } from 'prelude/pred/isVal';

import { match } from 'prelude/types/Match';

// TODO: Handle negative index.
// TODO: Handle other indexed structures.
// TODO: Handle maps.
// TODO: Handle strings.

export const assoc = curry((prop$, value, target) => match(target).of(
  [isArray, () => target.map((x, i) => (i === prop$ ? value : x))],
  [isVal, () => ({ ...target, [prop$]: value })],
).else({ [prop$]: value }));
