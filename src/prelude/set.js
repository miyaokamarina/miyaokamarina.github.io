import { curry } from 'prelude/curry';

import { isSetter } from 'prelude/pred/isSetter';

import { match } from 'prelude/types/Match';

export const set = curry((lens, maybeValue, target) => match(lens).of([isSetter, () => lens.set(maybeValue, target)]));
