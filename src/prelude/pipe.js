import { arity } from 'prelude/arity';
import { curry } from 'prelude/curry';
import { id } from 'prelude/id';
import { init } from 'prelude/init';
import { last } from 'prelude/last';

import { isFunction } from 'prelude/pred/isFunction';
import { isSemigroupoid } from 'prelude/pred/isSemigroupoid';

import { Match } from 'prelude/types/Match';
import { maybe } from 'prelude/types/Maybe';

export const pipe = curry((x, ...xs) => maybe(x, id, Match(
  [isSemigroupoid, () => {
    const xs$$ = [x, ...xs];
    const x$ = last(xs$$);
    const xs$ = init(xs$$);

    return xs$.reduceRight((a, b) => a.compose(b), x$);
  }],
  [isFunction, () => curry(arity(x.length, xs.reduce((f, g) => function composed(...args) {
    return g.call(this, f.apply(this, args)); // eslint-disable-line
  }, x)))],
).run(x, ...xs)));