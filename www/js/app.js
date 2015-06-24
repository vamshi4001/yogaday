// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngSanitize'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://www.youtube.com/**'
  ]);
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })
  
  .state('app.news', {
    url: "/news",
    views: {
      'menuContent': {
        templateUrl: "templates/news.html",
        controller: 'NewsCtrl'
      }
    }
  })
  .state('app.beginners', {
    url: "/beginners",
    views: {
      'menuContent': {
        templateUrl: "templates/beginners.html",
        controller: 'BeginnersCtrl'
      }
    }
  })
  .state('app.enthusiasts', {
    url: "/enthusiasts",
    views: {
      'menuContent': {
        templateUrl: "templates/enthusiasts.html",
        controller: 'EnthusiastsCtrl'
      }
    }
  })
  .state('app.experts', {
    url: "/experts",
    views: {
      'menuContent': {
        templateUrl: "templates/experts.html",
        controller: 'ExpertsCtrl'
      }
    }
  })
  .state('app.collections', {
    url: "/collections",
    views: {
      'menuContent': {
        templateUrl: "templates/collections.html",
        controller: 'CollectionsCtrl'
      }
    }
  })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/collections');
});
