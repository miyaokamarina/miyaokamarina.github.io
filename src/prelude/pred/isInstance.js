import { curry } from 'prelude/curry';

import { $IsInstance } from 'prelude/_symbols';

import { isVal } from 'prelude/pred/isVal';

export const isInstance = curry(x => isVal(x) && x[$IsInstance] === true);
