import { curry } from 'prelude/curry';

import { isApplicative } from 'prelude/pred/isApplicative';
import { isChain } from 'prelude/pred/isChain';

export const isMonad = curry(x => isApplicative(x) && isChain(x));
