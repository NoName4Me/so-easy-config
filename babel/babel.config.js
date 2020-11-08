module.exports = function(api) {
  api.cache(true);
  let defaultPresets = [
    [
      '@babel/preset-env',
      {
        modules: process.env.BABEL_ENV === 'esm' ? false : process.env.BABEL_ENV
      }
    ]
  ];

  const defaultPlugins = [
    [
      '@babel/plugin-transform-runtime',
      { useESModules: process.env.BABEL_ENV !== 'cjs' }
    ]
  ];

  return {
    presets: [...defaultPresets],
    plugins: defaultPlugins,
    env: {
      cjs: {
        presets: [
          [
            '@babel/preset-env',
            {
              modules: process.env.BABEL_ENV,
              useBuiltIns: 'usage',
              corejs: { version: '3' }
            }
          ]
        ]
      }
    }
  };
};
