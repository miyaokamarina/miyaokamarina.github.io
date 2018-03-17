import { curry } from 'prelude/curry';
import { define } from 'prelude/define';
import { keys } from 'prelude/keys';
import { isBound } from 'prelude/pred/isBound';
import { isFunction } from 'prelude/pred/isFunction';
import { isString } from 'prelude/pred/isString';
import { isVal } from 'prelude/pred/isVal';

import { $IsBound, $IsClass, $IsInstance, $IsUnion, $Type, $TypeRep } from 'prelude/_symbols';

// TODO: Handle explicitly set `Symbol.hasInstance`.

const isProp$ = x => isString(x) && x.length === 1;

const bind$ = (target, f) => {
  if (isBound(f)) {
    return f;
  }

  f.bind(target);
  define($IsBound, true, f);

  return f;
};

/**
 * Curry all methods of object
 *
 * @param {*} target target object
 */
const curry$ = target => {
  const keys$ = keys(target);

  keys$.forEach(key => {
    const value = target[key];

    if (isFunction(value) && !isProp$(key)) {
      define(key, curry(bind$(target, value)), target);
    }
  });
};

/**
 * Copy members from one object to another
 *
 * Mutates target object.
 *
 * @param {*} from source object.
 * @param {*} to target object.
 */
const copy$ = (from, to) => {
  const keys$ = keys(from);

  keys$.forEach(key => {
    if (!(key in to)) {
      define(key, from[key], to);
    }
  });
};

const freeze$ = target => {
  const keys$ = keys(target); // TODO: Freeze only own props.

  keys$.forEach(key => {
    if (isProp$(key)) {
      Reflect.defineProperty(target, key, { value: target[key], enumerable: true });
    } else {
      const descriptor = Reflect.getOwnPropertyDescriptor(target, key);

      if (isVal(descriptor) && descriptor.configurable) {
        define(key, target[key], target);
      }
    }
  });
};

const defaults = {
  union: [],
  singleton: false,
};

const type$ = options => curry(C => {
  const options$ = {
    ...defaults,
    ...options,
  };

  const isUnion = options$.union.length > 0;
  const unionMembers = options$.union.reduce((result, c) => ({ ...result, [c.name]: c }), {});
  const unionHasInstance = instance => options$.union.reduce((result, c) => result || (instance instanceof c), false);

  const R = new Proxy(C, {
    construct(target, args) {
      if (options$.singleton) {
        return R;
      }

      const C$ = isUnion ? options$.union[0] : target;
      const instance = new C$(...args);

      define($TypeRep, R, instance);
      define($IsInstance, true, instance);
      curry$(instance);
      copy$(R, instance);
      freeze$(instance);

      return instance;
    },
    apply(target, this$, args) {
      return new R(...args);
    },
  });

  define($Type, R, C);
  define($IsClass, true, C);
  curry$(C);

  if (options$.singleton) {
    const instance = new C();

    define($TypeRep, R, C);
    define($IsInstance, true, C);
    define(Symbol.hasInstance, x => x === R, C);
    copy$(instance, C);
  }

  if (isUnion) {
    define(Symbol.hasInstance, unionHasInstance, C);
    define($IsUnion, true, C);
    copy$(unionMembers, C);
    options$.union.forEach(C$ => copy$(C, C$));
  }

  freeze$(C);

  return R;
});

/**
 * Improve class and it's instances
 *
 * May be called with different signatures:
 *
 * @sig {Function → Function} improves class and it's instances with default options.
 * @sig {string → Function → Function} improves class with named boolean option set to `true`.
 * @sig {Options → Function → Function} improves class with explicitly given options.
 *
 * Options:
 *
 * @option {Function[]} union create union with given members.
 * @option {boolean} singleton make this class it's own single instance.
 *
 * Also it copys all static members to instance.
 */
export const type = curry(first => {
  if (typeof first === 'function' && first[$IsClass] !== true) {
    return type$({})(first);
  } else if (typeof first === 'function' && first[$IsClass] === true) {
    return first[$Type];
  } else if (typeof first === 'string') {
    return type$({ [first]: true });
  }

  return type$(first);
});
