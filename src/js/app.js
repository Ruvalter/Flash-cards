var app = angular.module("flashCard", [
  'angular-carousel',
  'ui.router'
])

app.config([
  '$stateProvider',

  function($stateProvider) {

    $stateProvider
      .state('decksState', {
        url: '/',
        templateUrl: 'templates/decks.html',
        controller: 'DeckListCtrl'
      })

      .state('cardsState', {
        url: '/decks/:id/cards',
        templateUrl: 'templates/cards.html',
        controller: 'CardListCtrl'
      })
  }
])

app.run([
  '$state',

  function($state) {
    $state.go('decksState')
  }
])
