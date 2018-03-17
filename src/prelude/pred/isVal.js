import { curry } from 'prelude/curry';

import { isNil } from 'prelude/pred/isNil';

export const isVal = curry(x => !isNil(x));
