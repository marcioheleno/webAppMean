/**
 * Created by marcioheleno on 16/05/16.
 */
var app = angular.module('app', []);

app.controller('PostsCtrl', function ($scope) {
  $scope.addPost = function () {

    if ($scope.postBody) {
      // unshift === adiciona elemento para o array
      $scope.posts.unshift({
        username: 'MárcioHeleno',
        body: $scope.postBody
      });
      // Limpa o campo apos o post ser submetido
      $scope.postBody = null
    }
  };

  $scope.posts = [
    {
      username: 'MárcioHeleno',
      body: 'Node rules'
    },
    {
      username: 'LevirPessoa',
      body: 'trying out angular.js'
    }
  ]
});