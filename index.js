const Haml = require('haml');

module.exports = function(embark) {
  embark.registerPipeline((embark.pluginConfig.files || ['**/*.haml']), function (opts) {
    return Haml.render(opts.source);
  });
};
