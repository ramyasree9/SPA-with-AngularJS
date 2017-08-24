(function(){

'use strict';
angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
  $scope.menu = "";
  $scope.msg = "";
  $scope.showMessage = function(){
    if(!$scope.menu)
    {
      $scope.msg = "Please enter data first";
      $scope.myColor = {"color" :"red"};
      $scope.borderColor = {"border-color" : "red"};
    }

    else {
     var no = $scope.menu.split(",").length;
     if(no <=3)
      $scope.msg = "Enjoy!";
     else {
       $scope.msg = "Too much!";
     }
     $scope.myColor = {"color" : "green"};
     $scope.borderColor = {"border-color" : "green"};

    }
  };
}

})();
