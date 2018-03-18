import { curry } from 'prelude/curry';

import { isInstance } from 'prelude/pred/isInstance';

import { $IsElse } from 'prelude/_symbols';

export const isElse = curry(x => isInstance(x) && x[$IsElse] === true);
