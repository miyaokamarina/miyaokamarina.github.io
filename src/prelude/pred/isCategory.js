import { curry } from 'prelude/curry';

import { isId } from 'prelude/pred/isId';
import { isSemigroupoid } from 'prelude/pred/isSemigroupoid';

export const isCategory = curry(x => isId(x) && isSemigroupoid(x));
