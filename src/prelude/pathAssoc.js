import { always } from 'prelude/always';
import { assoc } from 'prelude/assoc';
import { chain } from 'prelude/chain';
import { curry } from 'prelude/curry';
import { head } from 'prelude/head';
import { prop } from 'prelude/prop';
import { tail } from 'prelude/tail';

import { match } from 'prelude/types/Match';

export const pathAssoc = curry((focus, maybeValue, target) => match(focus).of(
  [() => focus.length === 1, () => assoc(head(focus), maybeValue, target)],
  [always(true), () => assoc(
    head(focus),
    chain(
      target$ => pathAssoc(tail(focus), maybeValue, target$),
      prop(head(focus), target),
    ),
    target,
  )],
));
