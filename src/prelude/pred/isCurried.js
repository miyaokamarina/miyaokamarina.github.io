import { curry } from 'prelude/curry';

import { $IsCurried } from 'prelude/_symbols';

import { isFunction } from 'prelude/pred/isFunction';

export const isCurried = curry(x => isFunction(x) && x[$IsCurried] === true);
