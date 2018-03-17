import { curry } from 'prelude/curry';

import { isApply } from 'prelude/pred/isApply';
import { isPointed } from 'prelude/pred/isPointed';

export const isApplicative = curry(x => isApply(x) && isPointed(x));
