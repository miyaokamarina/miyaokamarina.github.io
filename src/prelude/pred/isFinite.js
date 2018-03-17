import { curry } from 'prelude/curry';

import { isNumber } from 'prelude/pred/isNumber';
import { isInfinity } from 'prelude/pred/isInfinity';

export const isFinite = curry(x => isNumber(x) && !isInfinity(x));
