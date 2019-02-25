const path = require('path');

module.exports = {
  extraNodeModules: {
    "react-native": path.resolve("./node_modules/react-native"),
    "react": path.resolve("./node_modules/react"),
    "prop-types": path.resolve("./node_modules/prop-types"),
    "react-native-horizontal-timeline": path.resolve(__dirname, "")
  },
  getProjectRoots: () => [path.join(__dirname, "..", ".."), __dirname]
};
