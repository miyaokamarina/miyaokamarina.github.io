import { curry } from 'prelude/curry';
import { id } from 'prelude/id';

import { isGetter } from 'prelude/pred/isGetter';

import { Match } from 'prelude/types/Match';
import { maybe } from 'prelude/types/Maybe';

export const get = curry((l, x) => maybe(x, id, Match([isGetter, () => l.get(x)]).run(l)));
