import { curry } from 'prelude/curry';

import { isInstance } from 'prelude/pred/isInstance';

import { $IsContravariant } from 'prelude/_symbols';

export const isContravariant = curry(x => isInstance(x) && x[$IsContravariant] === true);
