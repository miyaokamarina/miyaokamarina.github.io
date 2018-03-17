import { curry } from 'prelude/curry';

import { isInstance } from 'prelude/pred/isInstance';

import { $IsAlt } from 'prelude/_symbols';

export const isAlt = curry(x => isInstance(x) && x[$IsAlt] === true);
