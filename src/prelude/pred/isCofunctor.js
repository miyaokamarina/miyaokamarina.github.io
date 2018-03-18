import { curry } from 'prelude/curry';

import { isInstance } from 'prelude/pred/isInstance';

import { $IsCofunctor } from 'prelude/_symbols';

export const isCofunctor = curry(x => isInstance(x) && x[$IsCofunctor] === true);
