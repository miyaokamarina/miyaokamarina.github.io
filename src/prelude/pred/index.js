import codegen from 'codegen.macro';

// eslint-disable-next-line
codegen`
  module.exports = require('fs').readdirSync(__dirname)
    .filter(x => x !== 'index.js')
    .filter(x => !/^[._$]/.test(x))
    .sort(new Intl.Collator('en', { numeric: true }).compare)
    .map(x => \`export * from './\${x}';\`)
    .join('\\n');
`;
