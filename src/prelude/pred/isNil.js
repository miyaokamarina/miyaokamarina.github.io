import { curry } from 'prelude/curry';

import { isNull } from 'prelude/pred/isNull';
import { isUndefined } from 'prelude/pred/isUndefined';

export const isNil = curry(x => isNull(x) || isUndefined(x) || (x instanceof Array && x.length === 0) || (typeof x === 'string' && x.length === 0));
