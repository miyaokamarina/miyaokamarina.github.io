import { curry } from 'prelude/curry';

export const isSymbol = curry(x => typeof x === 'symbol');
