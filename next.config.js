const path = require("path");
const withSass = require("@zeit/next-sass");

module.exports = withSass({
  sassLoaderOptions: {
    sourceMap: true
  },
  webpack(config, options) {
    config.resolve.alias["~"] = path.resolve(__dirname);

    // NOTE:
    // In package.json we have custom version of sass-loader.
    //
    // The one that is used by @zeit/next-sass has troubles
    // with importing ~/ files
    config.resolve.extensions.push(".scss");

    return config;
  }
});
