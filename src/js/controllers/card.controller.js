// nome do controller geralmente vem com maiuscula
app.controller("CardListCtrl", function($scope, $timeout) {

  $scope.flip = function(card) {
    card.flipped = !card.flipped;
  };

  $scope.carouselIndex = 0;


// Notifications array
  $scope.notificationAlerts = [
    {
      text: "You removed a card.",
      button: "UNDO",
      visi: "hidden"
    },
    {
      text: "You removed.",
      button: "UNDO",
      visi: "hidden"
    }
  ];

  $scope.ativo = false


  $scope.eraseCard = function() {
    console.log($scope.carouselIndex);
    // $scope.notificationAlerts[0].visi = "visible"
    $scope.ativo = true
    $timeout(function () { $scope.ativo = false; }, 4000);

    console.log($scope.notificationAlerts[0].visi)
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
      title: "Elephant",
      category: "Noun",
      meaning: "a very large grey mammal that has a trunk (= long nose) with which it can pick things up",
      example: "In the past eight years, the elephant population in Africa has been halved.",
      flipped: false,
      lastSeenAt: new Date().getDate()
    },
    {
      title: "Regarding",
      category: "Preposition",
      meaning: "about.",
      example: "The company is being questioned regarding its employment policy.",
      flipped: false,
      lastSeenAt: new Date().getDate()
    }
  ];
});