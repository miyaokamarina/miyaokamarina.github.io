import { ap } from 'prelude/ap';
import { append } from 'prelude/append';
import { curry } from 'prelude/curry';
import { map } from 'prelude/map';
import { reduce } from 'prelude/reduce';

import { isPointed } from 'prelude/pred/isPointed';
import { isArray } from 'prelude/pred/isArray';
import { isFunction } from 'prelude/pred/isFunction';
import { isTraversable } from 'prelude/pred/isTraversable';

import { match } from 'prelude/types/Match';

export const traverse = curry((T, f, x) => match(T, x).of(
  [() => (isPointed(T) || T === Array) && isFunction(f) && isTraversable(x), () => x.traverse(T, f)],
  [() => isPointed(T) && isFunction(f) && isArray(x), () => reduce((r, y) => ap(map(append, f(y)), r), T.of([]), x)],
).else(x));
