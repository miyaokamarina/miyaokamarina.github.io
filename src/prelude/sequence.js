import { curry } from 'prelude/curry';
import { id } from 'prelude/id';
import { traverse } from 'prelude/traverse';

export const sequence = curry((T, x) => traverse(T, id, x));
