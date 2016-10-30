var app = angular.module("demo", ['angular-carousel']);

app.controller("flipperDemo", function($scope) {

  $scope.flip = function(card) {
    card.flipped = !card.flipped;
  };

  $scope.carouselIndex = 0;

  $scope.eraseCard = function() {
    console.log($scope.carouselIndex);
    if ($scope.carouselIndex === $scope.cards.length - 1){
      $scope.cards.splice($scope.carouselIndex,1)
      $scope.carouselIndex -= 1
    } else {
      $scope.cards.splice($scope.carouselIndex,1)
    }
  }

  $scope.showLastSeenAt = function() {
    return $scope.cards[$scope.carouselIndex].lastSeenAt
  }

  $scope.cards = [
    {
      title: "Therefore",
      category: "Adverb",
      meaning: "as a result; because of that; for that reason.",
      example: "We were unable to get funding and therefore had to abandon the project.",
      flipped: false,
      lastSeenAt: new Date().getDate()
    },
    {
      title: "Cat",
      category: "Adverb",
      meaning: "Move fast",
      example: "I had to run",
      flipped: false,
      lastSeenAt: new Date().getDate()
    },
    {
      title: "Dog",
      category: "Adverb",
      meaning: "It is a animal",
      example: "Here is my new dog",
      flipped: false,
      lastSeenAt: new Date().getDate()
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