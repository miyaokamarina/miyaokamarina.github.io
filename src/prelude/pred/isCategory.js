import { curry } from 'prelude/curry';

import { isInstance } from 'prelude/pred/isInstance';

import { $IsCategory } from 'prelude/_symbols';

export const isCategory = curry(x => isInstance(x) && x[$IsCategory] === true);
