const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('admin');
    eleventyConfig.addPassthroughCopy('./src/css');
    eleventyConfig.addWatchTarget('./src/css/');
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    return {
      dir: {
        input: 'src',
        output: 'public',
      },
    };
  };