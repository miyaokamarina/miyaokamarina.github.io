import { curry } from 'prelude/curry';

import { isInstance } from 'prelude/pred/isInstance';

import { $IsBifunctor } from 'prelude/_symbols';

export const isBifunctor = curry(x => isInstance(x) && x[$IsBifunctor] === true);
