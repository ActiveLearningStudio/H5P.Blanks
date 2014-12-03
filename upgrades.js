var H5PUpgrades = H5PUpgrades || {};

H5PUpgrades['H5P.Blanks'] = (function ($) {
  return {
    1: {
      1: {
        contentUpgrade: function (parameters, finished) {
          // Moved all behavioural settings into "behaviour" group.
          parameters.behaviour = {
            enableRetry: parameters.enableTryAgain,
            enableSolutionsButton: parameters.enableShowSolution,
            autoCheck: parameters.autoCheck,
            caseSensitive: parameters.caseSensitive,
            showSolutionsRequiresInput: parameters.showSolutionsRequiresInput,
            separateLines: parameters.separateLines
          };
          delete parameters.enableTryAgain;
          delete parameters.enableShowSolution;
          delete parameters.autoCheck;
          delete parameters.caseSensitive;
          delete parameters.showSolutionsRequiresInput;
          delete parameters.separateLines;

          finished(null, parameters);
        }
      }
    }
  };
})(H5P.jQuery);