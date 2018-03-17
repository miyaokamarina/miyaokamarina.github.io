import { curry } from 'prelude/curry';

import { isInstance } from 'prelude/pred/isInstance';

import { $IsCopointed } from 'prelude/_symbols';

export const isCopointed = curry(x => isInstance(x) && x[$IsCopointed] === true);
