import { it } from 'param.macro';

import { alt } from 'prelude/alt';
import { assoc } from 'prelude/assoc';
import { chain } from 'prelude/chain';
import { compose } from 'prelude/compose';
import { flip } from 'prelude/flip';
import { map } from 'prelude/map';
import { path } from 'prelude/path';
import { pathAssoc } from 'prelude/pathAssoc';
import { prop } from 'prelude/prop';
import { type } from 'prelude/type';

import { Maybe } from 'prelude/types/Maybe';

import {
  $IsContravariant$,
  $IsFunctor$,
  $IsGetter,
  $IsId,
  $IsProfunctor$,
  $IsSemigroupoid,
  $IsSetter,
} from 'prelude/_symbols';

// TODO: `head`, `last`; `chain'`, `ap'`.

@type
export class Lens {
  static id = () => Lens(it, it);

  static [$IsId] = true;

  static path = (...focus) => Lens(path(focus), pathAssoc(focus));
  static prop = focus => Lens(prop(focus), assoc(focus));

  constructor(getter, setter) {
    this.g = getter;
    this.s = setter;
  }

  compose = lens => type(Lens)(
    compose(chain(lens.get), this.get),
    (maybeValue, target) => chain(
      flip(this.set)(target, lens.set(maybeValue)),
      alt(this.get(target), Maybe({})),
    ),
  );

  contramap$ = (preprocessTarget, postprocessTarget) => type(Lens)(
    compose(this.get, preprocessTarget),
    (maybeValue, target) => map(postprocessTarget, this.set(maybeValue, preprocessTarget(target))),
  );

  get = target => this.g(target);

  map$ = (postprocessValue, preprocessValue) => type(Lens)(
    maybeValue => map(postprocessValue, this.get(maybeValue)),
    (maybeValue, target) => this.set(map(preprocessValue, maybeValue), target),
  );

  promap$ = (preprocessTarget, postprocessTarget, postprocessValue, preprocessValue) => this
    .contramap$(preprocessTarget, postprocessTarget)
    .map$(postprocessValue, preprocessValue);

  set = (maybeValue, target) => this.s(maybeValue, target);

  [$IsContravariant$] = true;
  [$IsFunctor$] = true;
  [$IsGetter] = true;
  [$IsProfunctor$] = true;
  [$IsSemigroupoid] = true;
  [$IsSetter] = true;
}
