import { curry } from 'prelude/curry';

import { isInstance } from 'prelude/pred/isInstance';

import { $IsChainRec } from 'prelude/_symbols';

export const isChainRec = curry(x => isInstance(x) && x[$IsChainRec] === true);
