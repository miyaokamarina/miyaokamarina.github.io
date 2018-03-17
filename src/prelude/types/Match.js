import { always } from 'prelude/always';
import { type } from 'prelude/type';

import { isFunction } from 'prelude/pred/isFunction';

import { Just, Nothing } from 'prelude/types/Maybe';
import { Pred } from 'prelude/types/Pred';

const prepare = ([p, f]) => {
  let p$ = p;
  let f$ = f;

  if (!(p$ instanceof Pred)) {
    p$ = Pred(p$);
  }

  if (!isFunction(f$)) {
    f$ = always(f$);
  }

  return [p$, f$];
};

// TODO: Callable instance.

@type
export class Match {
  static empty = () => Match();
  static false = () => Match();
  static zero = () => Match();

  constructor(...a) {
    this.a = a.map(prepare);
  }

  alt = m => Match(...this.a, ...m.a);
  concat = this.alt;
  contramap = f => Match(...this.a.map(([p, f$]) => [p.contramap(f), f$])); // TODO: Use `map` and `contramap` functions.
  map = f => Match(...this.a.map(([p, f$]) => [p, f.compose(f$)])); // TODO: Use `map` and `compose` functions.
  or = this.alt;
  promap = (f, g) => Match(...this.a.map(([p, f$]) => [p.contramap(f), g.compose(f$)])); // TODO: Use `map`, `contramap` and `compose` functions.

  run = (x, ...xs) => {
    const matching = this.a.find(([p]) => p.run(x, ...xs)); // TODO: Use `find` and `run` functions.

    if (matching) {
      return Just(matching[1](x, ...xs));
    }

    return Nothing;
  };
}
