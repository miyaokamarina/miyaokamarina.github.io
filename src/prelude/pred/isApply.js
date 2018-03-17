import { curry } from 'prelude/curry';

import { isInstance } from 'prelude/pred/isInstance';

import { $IsApply } from 'prelude/_symbols';

export const isApply = curry(x => isInstance(x) && x[$IsApply] === true);
