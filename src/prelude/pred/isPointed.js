import { curry } from 'prelude/curry';

import { $IsPointed } from 'prelude/_symbols';

export const isPointed = curry(x => x[$IsPointed] === true);
