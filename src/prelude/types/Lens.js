import { type } from 'prelude/type';

import { $IsGetter, $IsSetter } from 'prelude/_symbols';

@type
export class Lens {
  constructor(getter, setter) {
    this.g = getter;
    this.s = setter;
  }

  set = (v, x) => this.s(v, x);
  get = x => this.g(x);

  [$IsGetter] = true;
  [$IsSetter] = true;
}
