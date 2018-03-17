const { writeFileSync } = require('fs');

const template = name => `import { curry } from 'prelude/curry';

import { isInstance } from 'prelude/pred/isInstance';

import { $Is${name} } from 'prelude/_symbols';

export const is${name} = curry(x => isInstance(x) && x[$Is${name}] === true);
`;

process.argv.slice(2).forEach(arg => writeFileSync(`./src/prelude/pred/is${arg}.js`, template(arg)));
