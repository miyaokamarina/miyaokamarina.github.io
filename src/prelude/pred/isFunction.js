import { curry } from 'prelude/curry';

import { $IsClass } from 'prelude/_symbols';

export const isFunction = curry(x => typeof x === 'function' && x[$IsClass] !== true);
