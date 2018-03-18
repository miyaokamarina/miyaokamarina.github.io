/*
eslint
no-unused-vars: off,
*/

import { always } from 'prelude/always';
// import { concat } from 'prelude/concat'; // TODO
import { curry } from 'prelude/curry';
import { equals } from 'prelude/equals';
import { lte } from 'prelude/lte';
import { map } from 'prelude/map';
import { type } from 'prelude/type';
import { union } from 'prelude/union';

import {
  $IsAlt,
  $IsApply,
  $IsBifunctor,
  $IsChain,
  $IsCopointed,
  $IsElse,
  $IsEmpty,
  $IsExtend,
  $IsFoldable,
  $IsFunctor,
  $IsOrd,
  $IsPlus,
  $IsPointed,
  $IsSetoid,
  $IsTraversable,
} from 'prelude/_symbols';

// TODO: Filter.

@type
export class Just {
  constructor(a) {
    this.a = a;
  }

  alt = fa => this;
  ap = fab => (fab.isJust ? this.map(fab.a) : this);
  bimap = (f, g) => type(Just)(f(this.a));
  chain = f => f(this.a);
  else = a => this.a;
  equals = fa => (fa.isJust ? equals(this.a, fa.a) : false);
  extend = f => type(Just)(f(this));
  lte = fa => (fa.isJust ? lte(this.a, fa.a) : false);
  map = f => type(Just)(f(this.a));
  reduce = (f, b) => f(b, this.a);
  traverse = (T, f) => map(type(Just), f(this.a));

  maybe = (b, f) => f(this.a);

  [$IsAlt] = true;
  [$IsApply] = true;
  [$IsBifunctor] = true;
  [$IsChain] = true;
  [$IsCopointed] = true;
  [$IsElse] = true;
  [$IsExtend] = true;
  [$IsFoldable] = true;
  [$IsFunctor] = true;
  [$IsOrd] = true;
  [$IsSetoid] = true;
  [$IsTraversable] = true;

  isMaybe = true;
  isJust = true;
  isNothing = false;
}

@type('singleton')
export class Nothing {
  alt = fa => fa;
  ap = fab => type(Nothing);
  bimap = (f, g) => Just(g());
  chain = f => type(Nothing);
  else = a => a;
  equals = fa => fa.isNothing;
  extend = f => type(Nothing);
  lte = fa => true;
  map = f => type(Nothing);
  reduce = (f, b) => b;
  traverse = (T, f) => T.of(type(Nothing));

  maybe = (b, f) => b;

  [$IsAlt] = true;
  [$IsApply] = true;
  [$IsBifunctor] = true;
  [$IsChain] = true;
  [$IsCopointed] = true;
  [$IsElse] = true;
  [$IsExtend] = true;
  [$IsFoldable] = true;
  [$IsFunctor] = true;
  [$IsOrd] = true;
  [$IsSetoid] = true;
  [$IsTraversable] = true;

  isMaybe = true;
  isJust = false;
  isNothing = true;
}

@union(Just, Nothing)
export class Maybe {
  static empty = always(Nothing);
  static of = a => Maybe.Just(a);
  static zero = always(Nothing);

  static [$IsEmpty] = true;
  static [$IsPlus] = true;
  static [$IsPointed] = true;
}

export const maybe = curry((b, f, m) => m.maybe(b, f));
