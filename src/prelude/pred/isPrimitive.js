import { curry } from 'prelude/curry';

import { isBoolean } from 'prelude/pred/isBoolean';
import { isNull } from 'prelude/pred/isNull';
import { isNumber } from 'prelude/pred/isNumber';
import { isString } from 'prelude/pred/isString';
import { isSymbol } from 'prelude/pred/isSymbol';
import { isUndefined } from 'prelude/pred/isUndefined';

export const isPrimitive = curry(x => isBoolean(x) || isNull(x) || isNumber(x) || isString(x) || isSymbol(x) || isUndefined(x));
