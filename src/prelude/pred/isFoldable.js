import { curry } from 'prelude/curry';

import { isInstance } from 'prelude/pred/isInstance';

import { $IsFoldable } from 'prelude/_symbols';

export const isFoldable = curry(x => isInstance(x) && x[$IsFoldable] === true);
