import { always } from 'prelude/always';
import { curry } from 'prelude/curry';
import { id } from 'prelude/id';

import { isExtend } from 'prelude/pred/isExtend';

import { Match } from 'prelude/types/Match';
import { maybe } from 'prelude/types/Maybe';

export const extend = curry((f, fa) => maybe(fa, id, Match(
  [isExtend, () => fa.extend(f)],
  [always(true), () => f(fa)],
).run(fa)));
