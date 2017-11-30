module.exports = function(config) {
  config.set({
    files: [],
    testRunner: "karma",
    mutator: "es5",
    transpilers: [],
    reporter: ["html", "clear-text", "progress"],
    testFramework: "jasmine",
    coverageAnalysis: "perTest",
    karmaConfigFile: "angular-todomvc/test/config/karma.conf.js",
    mutate: ["js/**/*.js"]
  });
};
