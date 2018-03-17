import { curry } from 'prelude/curry';

// TODO: Handle nil.
// TODO: Handle arrays and other indexed structures.
// TODO: Handle maps.

export const assoc = curry((key, value, target) => ({ ...target, [key]: value }));
