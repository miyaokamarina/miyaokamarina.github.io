import { curry } from 'prelude/curry';

import { isGetter } from 'prelude/pred/isGetter';

import { match } from 'prelude/types/Match';

export const get = curry((l, x) => match(l).of([isGetter, () => l.get(x)]).else(x));
