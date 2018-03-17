import { curry } from 'prelude/curry';

import { isInstance } from 'prelude/pred/isInstance';

import { $IsGetter } from 'prelude/_symbols';

export const isGetter = curry(x => isInstance(x) && x[$IsGetter] === true);
