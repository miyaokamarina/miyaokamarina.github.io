import { curry } from 'prelude/curry';

import { isInstance } from 'prelude/pred/isInstance';

import { $IsChain } from 'prelude/_symbols';

export const isChain = curry(x => isInstance(x) && x[$IsChain] === true);
