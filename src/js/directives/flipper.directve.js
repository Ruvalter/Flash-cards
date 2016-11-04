app.directive("flipper", function() {
  return {
    restrict: "E",
    template: "<div class='flipper' ng-transclude></div>",
    transclude: true,
    scope: {
      card: "="
    },
    link: function(scope, elem, attr) {
      scope.$watch(
        function() {
          return scope.card.flipped;
        },
        function(newValue, oldValue) {
          if (newValue !== oldValue) {
            newValue ? elem.children().eq(0).addClass('flipped') : elem.children().eq(0).removeClass('flipped')
          }
        }
      );
    }
  };
});