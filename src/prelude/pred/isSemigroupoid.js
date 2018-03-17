import { curry } from 'prelude/curry';

import { isInstance } from 'prelude/pred/isInstance';

import { $IsSemigroupoid } from 'prelude/_symbols';

export const isSemigroupoid = curry(x => isInstance(x) && x[$IsSemigroupoid] === true);
