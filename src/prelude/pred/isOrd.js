import { curry } from 'prelude/curry';

import { isInstance } from 'prelude/pred/isInstance';

import { $IsOrd } from 'prelude/_symbols';

export const isOrd = curry(x => isInstance(x) && x[$IsOrd] === true);
