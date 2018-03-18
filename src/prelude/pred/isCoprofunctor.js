import { curry } from 'prelude/curry';

import { isInstance } from 'prelude/pred/isInstance';

import { $IsCoprofunctor } from 'prelude/_symbols';

export const isCoprofunctor = curry(x => isInstance(x) && x[$IsCoprofunctor] === true);
