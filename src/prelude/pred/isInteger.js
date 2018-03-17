import { curry } from 'prelude/curry';

// TODO: U8, U16, U32
// TODO: S8, S16, S32

export const isInteger = curry(x => Number.isInteger(x));
