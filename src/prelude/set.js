import { curry } from 'prelude/curry';
import { id } from 'prelude/id';

import { isSetter } from 'prelude/pred/isSetter';

import { Match } from 'prelude/types/Match';
import { maybe } from 'prelude/types/Maybe';

export const set = curry((l, v, x) => maybe(x, id, Match([isSetter, () => l.set(v, x)]).run(l)));
