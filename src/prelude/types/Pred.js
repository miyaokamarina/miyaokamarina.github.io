import { always } from 'prelude/always';
import { equals } from 'prelude/equals';
import { lte } from 'prelude/lte';
import { type } from 'prelude/type';

import { isClass } from 'prelude/pred/isClass';
import { isFunction } from 'prelude/pred/isFunction';
import { isRegexp } from 'prelude/pred/isRegexp';

import {
  $IsAlt,
  $IsGroup,
  $IsMonoid,
  $IsPlus,
  $IsSemigroup,
} from 'prelude/_symbols';

import { Left, Right } from 'prelude/types/Either';
import { Just, Nothing } from 'prelude/types/Maybe';

// TODO: Callable instance.
// TODO: Denote other monoids (and, or).
// TODO: Add methods to combine predicates with increasing arity (e. g. two unary to one binary).

@type
export class Pred {
  static empty = () => Pred(always(false));
  static false = () => Pred(always(false));
  static true = () => Pred(always(true));
  static zero = () => Pred(always(false));

  static class = c => Pred(x => x instanceof c);
  static equals = a => Pred(b => equals(a, b));
  static lte = a => Pred(b => lte(a, b));
  static regexp = e => Pred(x => e.test(x));

  // TODO: `gte`, `lt`, `gt`, `nequals`.

  constructor(f) {
    if (isFunction(f)) {
      this.f = f;
    } else if (isClass(f)) {
      return Pred.class(f);
    } else if (isRegexp(f)) {
      return Pred.regexp(f);
    } else {
      return Pred.equals(f);
    }
  }

  alt = p => Pred((x, ...xs) => this.run(x, ...xs) || p.run(x, ...xs));
  and = p => Pred((x, ...xs) => this.run(x, ...xs) && p.run(x, ...xs));
  concat = this.and;
  contramap = f => Pred((x, ...xs) => this.run(f(x, ...xs)));
  invert = () => Pred((x, ...xs) => !this.run(x, ...xs));
  not = this.invert;
  or = this.alt;
  xor = p => Pred((x, ...xs) => this.run(x, ...xs) !== p.run(x, ...xs));

  run = (x, ...xs) => {
    if (this.f.length === 1) {
      return xs.reduce((r, y) => r && this.f(y), this.f(x)); // TODO: Use `every` function.
    }

    return this.f(x, ...xs);
  };

  mkEither = a => (this.run(a) ? Right(a) : Left(a));
  mkMaybe = a => (this.run(a) ? Just(a) : Nothing);

  [$IsAlt] = true;
  [$IsGroup] = true;
  [$IsMonoid] = true;
  [$IsPlus] = true;
  [$IsSemigroup] = true;

  isPred = true;
}
