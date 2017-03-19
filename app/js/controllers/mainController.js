angular.module('app')
    .controller('MainController', function($scope) {

      var firstName = "";
      var lastName = "";
      var email = "";
      $scope.contacts =[];


      $scope.addForm = function(){
         firstName = $scope.newFirstName;
         lastName = $scope.newLastName;
         email = $scope.newEmail;
        $scope.contacts.push({firstName, lastName, email});
        $scope.newFirstName ="";
        $scope.newLastName = "";
        $scope.newEmail ="";
      };


    });
