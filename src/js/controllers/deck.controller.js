app.controller("DeckListCtrl", [
  '$scope',
  '$state',

  function($scope,
           $state) {
    
    $scope.decks = [
      {
        id: 1,
        name: 'Animals'
      },
      {
        id: 2,
        name: 'House Items'
      }
    ];

    $scope.goToDeckCards = function(deck) {
      $state.go('cardsState', {id: deck.id});
    }
  }
]);