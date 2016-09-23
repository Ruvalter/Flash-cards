var app = angular.module('Contact-List', [])


app.controller("MainCtrl", ["$scope", function ($scope) {
  $scope.contact = {name: null, number: null}
  $scope.text = "Guarde aqui todos os seus contatos"
  $scope.contactList = [
    {
      name: 'Caro',
      number: '123',
    },
    {
      name: 'Bob',
      number: '456'
    },
    {
      name: 'Fido',
      number: '789'
    },
    {
      name: 'Flufkins',
      number: '156'
    },
    {
      name: 'Snow Ball',
      number: '788'
    }
  ]
  $scope.saveContact = function () {
    $scope.contactList.push({
      name: $scope.contact.name,
      number: $scope.contact.number
    })
    $scope.contact.name = null
    $scope.contact.number = null
  }
}])

