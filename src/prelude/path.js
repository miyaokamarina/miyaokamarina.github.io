import { curry } from 'prelude/curry';
import { head } from 'prelude/head';
import { prop } from 'prelude/prop';
import { tail } from 'prelude/tail';

import { isNil } from 'prelude/pred/isNil';

// TODO: Use `match`.

export const path = curry((...segments) => curry(x => {
  if (isNil(segments)) {
    return x;
  }

  if (segments.length === 1) {
    return prop(head(segments), x);
  }

  return path(...tail(segments))(prop(head(segments), x));
}));
