import { curry } from 'prelude/curry';

import { isInstance } from 'prelude/pred/isInstance';

import { $IsSemigroup } from 'prelude/_symbols';

export const isSemigroup = curry(x => isInstance(x) && x[$IsSemigroup] === true);
