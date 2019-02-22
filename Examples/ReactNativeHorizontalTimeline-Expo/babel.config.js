module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      development: {
        plugins: [
          '@babel/plugin-transform-runtime',
          '@babel/plugin-transform-react-jsx-source'
        ]
      }
    }
  };
};
