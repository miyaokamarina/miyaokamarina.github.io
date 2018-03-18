import { chain } from 'prelude/chain';
import { curry } from 'prelude/curry';
import { head } from 'prelude/head';
import { prop } from 'prelude/prop';
import { tail } from 'prelude/tail';

import { match } from 'prelude/types/Match';

export const path = curry((focus, target) => match(focus).of(
  [() => focus.length === 1, () => prop(head(focus), target)],
  [() => focus.length > 1, () => chain(path(tail(focus)), prop(head(focus), target))],
));
