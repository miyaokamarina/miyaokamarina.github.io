import { curry } from 'prelude/curry';

import { isInstance } from 'prelude/pred/isInstance';

import { $IsEmpty } from 'prelude/_symbols';

export const isEmpty = curry(x => isInstance(x) && x[$IsEmpty] === true);
