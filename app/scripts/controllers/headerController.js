'use strict';

/**
 * @ngdoc function
 * @name chiAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the chiAppApp
 */
angular.module('chiAppApp')
  .controller('HeaderController', function ($scope, $location) {
   // Check if current URL-location matches the highlighted item
   //
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
  });
