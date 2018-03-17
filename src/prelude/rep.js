import { curry } from 'prelude/curry';

import { $TypeRep } from 'prelude/_symbols';

export const rep = curry(x => x[$TypeRep]);
