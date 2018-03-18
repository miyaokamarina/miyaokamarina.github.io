import { curry } from 'prelude/curry';

import { isInstance } from 'prelude/pred/isInstance';

import { $IsFunctor$ } from 'prelude/_symbols';

export const isFunctor$ = curry(x => isInstance(x) && x[$IsFunctor$] === true);
