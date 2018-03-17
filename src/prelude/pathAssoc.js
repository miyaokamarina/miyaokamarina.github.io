import { always } from 'prelude/always';
import { assoc } from 'prelude/assoc';
import { curry } from 'prelude/curry';
import { head } from 'prelude/head';
import { prop } from 'prelude/prop';
import { tail } from 'prelude/tail';

import { isNil } from 'prelude/pred/isNil';

import { match } from 'prelude/types/Match';

export const pathAssoc = curry((...segments) => curry((value, target) => match(segments).of(
  [isNil, () => target],
  [() => segments.length === 1, () => assoc(head(segments), value, target)],
  [always(true), () => assoc(head(segments), pathAssoc(...tail(segments))(value, prop(head(segments), target)), target)],
).else(target)));
