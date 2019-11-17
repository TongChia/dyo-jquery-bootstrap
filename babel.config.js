function isBabelRegister(caller) {
  return !!(caller && caller.name === '@babel/register');
}

module.exports = function (api) {
  const isRegister = api.caller(isBabelRegister);

  if (isRegister)
    return {presets: [['@babel/preset-env', {targets: {node: 'current'}}]]};

  return {
    sourceType: 'unambiguous',
    presets: [
      ['@babel/preset-env', {
        debug: true,
        useBuiltIns: 'usage',
        corejs: 2,
        modules: false,
        loose: true,
        targets: {ie: 8}
      }]
    ],
    plugins: [
      ['@babel/plugin-transform-react-jsx', {
        pragma: 'h',
        pragmaFrag: 'Fragment'
      }],
      ['@babel/plugin-transform-runtime', {
        useESModules: true, 
        corejs: 2, 
        helper: true
      }]
    ]
  }
};

