import { curry } from 'prelude/curry';

import { isCopointed } from 'prelude/pred/isCopointed';
import { isExtend } from 'prelude/pred/isExtend';

export const isComonad = curry(x => isCopointed(x) && isExtend(x));
