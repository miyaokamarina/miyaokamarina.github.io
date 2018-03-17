import { curry } from 'prelude/curry';

import { isInstance } from 'prelude/pred/isInstance';

import { $IsFilterable } from 'prelude/_symbols';

export const isFilterable = curry(x => isInstance(x) && x[$IsFilterable] === true);
