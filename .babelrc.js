module.exports = {
  presets: [
    [
      '@babel/env',
      {
        useBuiltIns: 'usage',
        modules: false,
        shippedProposals: true,
      },
    ],
    '@babel/react',
    '@babel/stage-0',
  ],
  plugins: [
    'macros',
    [
      'styled-components',
      {
        preprocess: true,
      },
    ],
  ],
};
