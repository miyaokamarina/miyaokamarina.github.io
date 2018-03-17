import { compose } from 'prelude/compose';
import { type } from 'prelude/type';

import {
  $IsGetter,
  $IsSemigroupoid,
  $IsSetter,
} from 'prelude/_symbols';

@type
export class Lens {
  constructor(getter, setter) {
    this.g = getter;
    this.s = setter;
  }

  compose = l => type(Lens)(compose(l.g, this.g), (v, x) => this.s(l.s(v, this.g(x)), x));
  get = x => this.g(x);
  set = (v, x) => this.s(v, x);

  [$IsGetter] = true;
  [$IsSemigroupoid] = true;
  [$IsSetter] = true;
}
