import { curry } from 'prelude/curry';

import { isInstance } from 'prelude/pred/isInstance';

import { $IsSetter } from 'prelude/_symbols';

export const isSetter = curry(x => isInstance(x) && x[$IsSetter] === true);
