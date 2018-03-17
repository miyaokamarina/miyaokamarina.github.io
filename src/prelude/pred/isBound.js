import { curry } from 'prelude/curry';

import { $IsBound } from 'prelude/_symbols';

import { isFunction } from 'prelude/pred/isFunction';

export const isBound = curry(x => isFunction(x) && x[$IsBound] === true);
