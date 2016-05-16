/**
 * Created by marcioheleno on 15/05/16.
 */
angular.module('app').controller('ListCtrl', function($scope) {
  $scope.list_items = [
    'Item 1',
    'Item 2',
    'Item 3'
  ];
  $scope.addListItem = function() {
    $scope.list_items.push('Item 4');
  };
});