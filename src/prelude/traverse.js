import { ap } from 'prelude/ap';
import { append } from 'prelude/append';
import { curry } from 'prelude/curry';
import { id } from 'prelude/id';
import { map } from 'prelude/map';
import { reduce } from 'prelude/reduce';

import { isPointed } from 'prelude/pred/isPointed';
import { isArray } from 'prelude/pred/isArray';
import { isFunction } from 'prelude/pred/isFunction';
import { isTraversable } from 'prelude/pred/isTraversable';

import { Match } from 'prelude/types/Match';
import { maybe } from 'prelude/types/Maybe';

export const traverse = curry((T, f, x) => maybe(x, id, Match(
  [() => (isPointed(T) || T === Array) && isFunction(f) && isTraversable(x), () => x.traverse(T, f)],
  [() => isPointed(T) && isFunction(f) && isArray(x), () => reduce((r, y) => ap(map(append, f(y)), r), T.of([]), x)],
).run(T, x)));
