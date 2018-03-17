import { curry } from 'prelude/curry';

// TODO: `Indexed` type. Also use it for `append`, `every` and `some` functions. Also for take* and drop* functions.
// TODO: Append and prepend for strings.

export const prepend = curry((x, xs) => [x, ...xs]);
