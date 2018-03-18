import { compose } from 'prelude/compose';
import { type } from 'prelude/type';

import {
  $IsCocontravariant,
  $IsCofunctor,
  $IsCoprofunctor,
  $IsGetter,
  $IsSemigroupoid,
  $IsSetter,
} from 'prelude/_symbols';

// TODO: Prop, path, head, last, id.

@type
export class Lens {
  constructor(getter, setter) {
    this.g = getter;
    this.s = setter;
  }

  cocontramap = (f, g) => type(Lens)(compose(this.g, f), (v, x) => g(this.s(v, f(x))));
  comap = (f, g) => type(Lens)(compose(g, this.g), (v, x) => this.s(f(v), x));
  compose = l => type(Lens)(compose(l.g, this.g), (v, x) => this.s(l.s(v, this.g(x)), x));
  copromap = (f, g, f$, g$) => this.cocontramap(f, g).comap(f$, g$);
  get = x => this.g(x);
  set = (v, x) => this.s(v, x);

  [$IsCocontravariant] = true;
  [$IsCofunctor] = true;
  [$IsCoprofunctor] = true;
  [$IsGetter] = true;
  [$IsSemigroupoid] = true;
  [$IsSetter] = true;
}
