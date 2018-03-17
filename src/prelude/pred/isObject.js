import { curry } from 'prelude/curry';

import { isNull } from 'prelude/pred/isNull';

export const isObject = curry(x => !isNull(x) && typeof x === 'object');
