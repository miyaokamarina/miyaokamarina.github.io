import { curry } from 'prelude/curry';

import { isInstance } from 'prelude/pred/isInstance';

import { $IsTraversable } from 'prelude/_symbols';

export const isTraversable = curry(x => isInstance(x) && x[$IsTraversable] === true);
