import { always } from 'prelude/always';
import { curry } from 'prelude/curry';

import { isExtend } from 'prelude/pred/isExtend';

import { match } from 'prelude/types/Match';

export const extend = curry((f, fa) => match(fa).of(
  [isExtend, () => fa.extend(f)],
  [always(true), () => f(fa)],
).else(fa));
