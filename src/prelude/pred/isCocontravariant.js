import { curry } from 'prelude/curry';

import { isInstance } from 'prelude/pred/isInstance';

import { $IsCocontravariant } from 'prelude/_symbols';

export const isCocontravariant = curry(x => isInstance(x) && x[$IsCocontravariant] === true);
