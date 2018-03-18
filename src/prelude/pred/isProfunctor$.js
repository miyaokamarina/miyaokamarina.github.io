import { curry } from 'prelude/curry';

import { isInstance } from 'prelude/pred/isInstance';

import { $IsProfunctor$ } from 'prelude/_symbols';

export const isProfunctor$ = curry(x => isInstance(x) && x[$IsProfunctor$] === true);
