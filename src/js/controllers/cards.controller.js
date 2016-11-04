// nome do controller geralmente vem com maiuscula
app.controller("CardsController", function($scope, $timeout) {

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