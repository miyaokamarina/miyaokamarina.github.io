import { curry } from 'prelude/curry';

import { isArray } from 'prelude/pred/isArray';
import { isString } from 'prelude/pred/isString';
import { isVal } from 'prelude/pred/isVal';

import { match } from 'prelude/types/Match';

export const prop = curry((prop$, x) => match(x).of(
  [isArray, () => (prop$ < 0 ? x[x.length + prop$] : x[prop$])],
  [isString, () => (prop$ < 0 ? x[x.length + prop$] : x[prop$])],
  [isVal, () => x[prop$]],
).else(x));
