angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('NewsCtrl', function($scope, $sce) {
  $scope.videos = [
    {
      "id":"dbYQeBJIWRs",
      "description":"This is a helpful video for all yoga lovers"
    }
  ]
})

.controller('BeginnersCtrl', function($scope, $sce) {
  $scope.videos = [
    {
      "id":"dbYQeBJIWRs",
      "description":"This is a helpful video for all yoga lovers"
    }
  ]
})

.controller('EnthusiastsCtrl', function($scope, $sce) {
  $scope.videos = [
    {
      "id":"dbYQeBJIWRs",
      "description":"This is a helpful video for all yoga lovers"
    }
  ]
})

.controller('ExpertsCtrl', function($scope, $sce) {
  $scope.videos = [
    {
      "id":"dbYQeBJIWRs",
      "description":"This is a helpful video for all yoga lovers"
    }
  ]
})

.controller('CollectionsCtrl', function($scope, $sce, $http) {
  $scope.getIframeSrc = function(src) {
    return 'https://www.youtube.com/embed/' + src;
  };
  $scope.videos = [];
  $http({
      method: "GET",
      url: "http://mycollect.in/ticketsws/index.php/data/getYogaVideos.json",
  }).then(function(response){
    console.log(response);
      if(response.data.isSuccess){
        $scope.videos = response.data.videos
      }
      else{
        alert("Couldn't fetch data");
      }
  })
})

