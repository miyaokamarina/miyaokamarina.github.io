import { curry } from 'prelude/curry';

import { isInstance } from 'prelude/pred/isInstance';

import { $IsSetoid } from 'prelude/_symbols';

export const isSetoid = curry(x => isInstance(x) && x[$IsSetoid] === true);
