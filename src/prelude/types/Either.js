/*
eslint
no-unused-vars: off,
*/

import { always } from 'prelude/always';
// import { concat } from 'prelude/concat'; // TODO
import { equals } from 'prelude/equals';
import { lte } from 'prelude/lte';
import { type } from 'prelude/type';
import { union } from 'prelude/union';

import {
  $IsAlt,
  $IsApply,
  $IsBifunctor,
  $IsChain,
  $IsCopointed,
  $IsExtend,
  $IsFoldable,
  $IsFunctor,
  $IsOrd,
  $IsPointed,
  $IsSetoid,
  $IsTraversable,
} from 'prelude/_symbols';

// TODO: Else.

@type
export class Right {
  constructor(a) {
    this.a = a;
  }

  alt = fa => this;
  ap = fab => (fab.isRight ? this.map(fab.a) : fab);
  bimap = (f, g) => Right(f(this.a));
  chain = f => f(this.a);
  equals = fa => (fa.isRight ? equals(this.a, fa.a) : false);
  extend = f => this.Right(f(this));
  extract = always(this.a);
  lte = fa => (fa.isRight ? lte(this.a, fa.a) : false);
  map = f => this.Right(f(this.a));
  reduce = (f, b) => f(b, this.a);
  traverse = (T, f) => f(this.a).map(Right);

  either = (f, g) => g(this.a);

  isEither = true;
  isRight = true;
  isLeft = false;

  [$IsAlt] = true;
  [$IsApply] = true;
  [$IsBifunctor] = true;
  [$IsChain] = true;
  [$IsCopointed] = true;
  [$IsExtend] = true;
  [$IsFoldable] = true;
  [$IsFunctor] = true;
  [$IsOrd] = true;
  [$IsSetoid] = true;
  [$IsTraversable] = true;
}

@type
export class Left {
  constructor(a) {
    this.a = a;
  }

  alt = fa => fa;
  ap = fab => this;
  bimap = (f, g) => Right(g(null));
  chain = f => this;
  equals = fa => (fa.isLeft ? equals(this.a, fa.a) : false);
  extend = f => this;
  extract = always(this.a);
  lte = fa => (fa.isLeft ? lte(this.a, fa.a) : true);
  map = f => this;
  reduce = (f, b) => b;
  traverse = (T, f) => T.of(this);

  either = (f, g) => f(this.a);

  isEither = true;
  isRight = false;
  isLeft = true;

  [$IsAlt] = true;
  [$IsApply] = true;
  [$IsBifunctor] = true;
  [$IsChain] = true;
  [$IsCopointed] = true;
  [$IsExtend] = true;
  [$IsFoldable] = true;
  [$IsFunctor] = true;
  [$IsOrd] = true;
  [$IsSetoid] = true;
  [$IsTraversable] = true;
}

@union(Right, Left)
export class Either {
  static of = a => Right(a);

  [$IsPointed] = true;
}
