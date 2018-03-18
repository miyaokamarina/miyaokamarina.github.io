import { curry } from 'prelude/curry';

import { isInstance } from 'prelude/pred/isInstance';

import { $IsId } from 'prelude/_symbols';

export const isId = curry(x => isInstance(x) && x[$IsId] === true);
