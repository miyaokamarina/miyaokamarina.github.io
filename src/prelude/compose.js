import { arity } from 'prelude/arity';
import { curry } from 'prelude/curry';
import { init } from 'prelude/init';
import { last } from 'prelude/last';

import { isFunction } from 'prelude/pred/isFunction';
import { isSemigroupoid } from 'prelude/pred/isSemigroupoid';

import { match } from 'prelude/types/Match';

export const compose = curry((x, ...xs) => match(x, ...xs).of(
  [isSemigroupoid, () => xs.reduce((a, b) => a.compose(b), x)],
  [isFunction, () => {
    const xs$$ = [x, ...xs];
    const x$ = last(xs$$);
    const xs$ = init(xs$$);

    return curry(arity(x$.length, xs$.reduceRight((f, g) => function composed(...args) {
      return g.call(this, f.apply(this, args)); // eslint-disable-line
    }, x$)));
  }],
).else(x));
