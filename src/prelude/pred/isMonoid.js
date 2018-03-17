import { curry } from 'prelude/curry';

import { isInstance } from 'prelude/pred/isInstance';

import { $IsMonoid } from 'prelude/_symbols';

export const isMonoid = curry(x => isInstance(x) && x[$IsMonoid] === true);
