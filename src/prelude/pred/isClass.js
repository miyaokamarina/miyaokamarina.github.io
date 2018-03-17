import { curry } from 'prelude/curry';

import { $IsClass } from 'prelude/_symbols';

export const isClass = curry(x => typeof x === 'function' && x[$IsClass] === true);
