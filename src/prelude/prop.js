import { always } from 'prelude/always';
import { curry } from 'prelude/curry';
import { id } from 'prelude/id';

import { isArray } from 'prelude/pred/isArray';
import { isNil } from 'prelude/pred/isNil';
import { isString } from 'prelude/pred/isString';
import { isVal } from 'prelude/pred/isVal';

import { Match } from 'prelude/types/Match';
import { maybe } from 'prelude/types/Maybe';

export const prop = curry((prop$, x) => maybe(x, id, Match(
  [isNil, always(x)],
  [isArray, () => (prop$ < 0 ? x[x.length + prop$] : x[prop$])],
  [isString, () => (prop$ < 0 ? x[x.length + prop$] : x[prop$])],
  [isVal, () => x[prop$]],
).run(x)));
