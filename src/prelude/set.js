import { curry } from 'prelude/curry';

import { isSetter } from 'prelude/pred/isSetter';

import { match } from 'prelude/types/Match';
import { Nothing } from 'prelude/types/Maybe';

export const set = curry((lens, maybeValue, target) => match(lens).of([isSetter, () => lens.set(maybeValue, target)]).else(Nothing));
