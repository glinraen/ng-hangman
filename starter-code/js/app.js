console.log('app.js loaded!');

// initialize the application
angular
  .module("hangmanApp", [])
  .controller("hangmanCtrl", hangmanCtrl);


  // logic goes here
  

  hangmanCtrl.$inject = ['$scope'];
  function hangmanCtrl($scope){
    $scope.hangman = new HangmanGame('elephant');
    $scope.guessLetter = function (input){
      $scope.hangman.guess(input);
      $scope.hangman.input = "";
    };
  }



