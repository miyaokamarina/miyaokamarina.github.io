const { readdirSync, writeFileSync } = require('fs');

const args = process.argv.slice(2);

args.forEach(arg => {
  const modules = readdirSync(arg).filter(x => x !== 'index.js' && !/^[._$]/.test(x)).sort(new Intl.Collator('en', { numeric: true }).compare);

  writeFileSync(`${arg}/index.js`, `${modules.map(x => `export * from './${x}';`).join('\n')}\n`);
});

