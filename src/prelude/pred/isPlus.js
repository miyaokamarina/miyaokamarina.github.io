import { curry } from 'prelude/curry';

import { isInstance } from 'prelude/pred/isInstance';

import { $IsPlus } from 'prelude/_symbols';

export const isPlus = curry(x => isInstance(x) && x[$IsPlus] === true);
