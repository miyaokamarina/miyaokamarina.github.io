import { curry } from 'prelude/curry';

import { isInstance } from 'prelude/pred/isInstance';

import { $IsExtend } from 'prelude/_symbols';

export const isExtend = curry(x => isInstance(x) && x[$IsExtend] === true);
