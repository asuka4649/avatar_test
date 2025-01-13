const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  // Add support for NativeWind
  config.resolver.assetExts.push("cjs");

  return config;
})();
