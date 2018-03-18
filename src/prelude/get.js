import { curry } from 'prelude/curry';

import { isGetter } from 'prelude/pred/isGetter';

import { match } from 'prelude/types/Match';

export const get = curry((lens, target) => match(lens).of([isGetter, () => lens.get(target)]));
