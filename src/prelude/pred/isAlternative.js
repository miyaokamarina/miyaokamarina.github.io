import { curry } from 'prelude/curry';

import { isAlt } from 'prelude/pred/isAlt';
import { isPlus } from 'prelude/pred/isPlus';

export const isAlternative = curry(x => isAlt(x) && isPlus(x));
