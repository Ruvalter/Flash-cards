var app = angular.module("demo", ['slick']);

app.controller("flipperDemo", function($scope) {
  // $scope.flipped = false;


  $scope.flip = function(card) {
    card.flipped = !card.flipped;
    // $scope.flipped = !$scope.flipped
  };

  $scope.cards = [
    {
      title: "Run",
      meaning: "Move fast",
      example: "I had to run",
      flipped: false
    },
    {
      title: "Dog",
      meaning: "It is a animal",
      example: "Here is my new dog",
      flipped: false
    },
     {
      title: "Cat",
      meaning: "It is a animal",
      example: "Here is my new dog",
      flipped: false
    }
  ];
});

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

app.directive("front", function() {
  return {
    restrict: "E",
    template: "<div class='front tile' ng-transclude></div>",
    transclude: true
  };
});

app.directive("back", function() {
  return {
    restrict: "E",
    template: "<div class='back tile' ng-transclude></div>",
    transclude: true
  }
});