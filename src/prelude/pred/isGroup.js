import { curry } from 'prelude/curry';

import { isInstance } from 'prelude/pred/isInstance';

import { $IsGroup } from 'prelude/_symbols';

export const isGroup = curry(x => isInstance(x) && x[$IsGroup] === true);
