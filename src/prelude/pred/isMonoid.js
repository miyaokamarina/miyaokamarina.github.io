import { curry } from 'prelude/curry';

import { isEmpty } from 'prelude/pred/isEmpty';
import { isSemigroup } from 'prelude/pred/isSemigroup';

export const isMonoid = curry(x => isEmpty(x) && isSemigroup(x));
