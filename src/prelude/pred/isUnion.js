import { curry } from 'prelude/curry';

import { $IsUnion } from 'prelude/_symbols';

import { isClass } from 'prelude/pred/isClass';

export const isUnion = curry(x => isClass(x) && x[$IsUnion] === true);
