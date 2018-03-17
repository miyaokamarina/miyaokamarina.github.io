import { curry } from 'prelude/curry';

import { isNumber } from 'prelude/pred/isNumber';
import { isInteger } from 'prelude/pred/isInteger';

export const isFloat = curry(x => isNumber(x) && !isInteger(x));
