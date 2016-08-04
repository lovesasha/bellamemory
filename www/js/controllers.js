angular.module('bella.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal) {

  $ionicModal.fromTemplateUrl('templates/modal/player.html', {
    scope: $scope,
    animation: 'light-fade-in-out'
  }).then(function(modal) {
    $scope.player = modal;
    $scope.player.show();
  });
  // 打开播放器
  $scope.openPlayer = function() {
    $scope.player.show();
  };
  // 关闭播放器
  $scope.closePlayer = function() {
    $scope.player.hide();
  };
  /*$scope.$on('$ionicView.beforeLeave',function() {
   $scope.player.hide();
   });
   $scope.$on('$destroy', function() {
   $scope.player.remove();
   });*/

  // 打开音乐播放器
  $scope.showPlayer = function() {
    $scope.openPlayer();
  };

  $scope.playing = true;
  // 播放或暂停
  $scope.playOrPause = function() {
    $scope.playing = !$scope.playing;
  };

  var thumbLeft = 0;
  var trackWidth = 0;
  var sliderNode;
  $scope.thumbDragStart = function() {
    thumbLeft = parseInt(event.target.currentStyle['left']);
    trackWidth = parseInt(event.target.parentNode.currentStyle['width']) - 9;
    sliderNode = angular.element(event.target.parentNode).children()[0];
  };
  $scope.thumbDrag = function() {
    var distance = parseInt(event.gesture.deltaX) + thumbLeft;
    distance = distance < -9 ? -9 : (distance > trackWidth ? trackWidth : distance);
    angular.element(event.target).css({left: distance + 'px'});
    angular.element(sliderNode).css({width: distance + 'px'});
  };

})
// tab页控制器
.controller('TabsCtrl', function($scope, $ionicModal) {

})
// tab页控制器
.controller('CommunityCtrl', function($scope, $rootScope) {

  $scope.articles = [
    {id: 1, title: '贝壳天地板块'}
  ];

  $scope.articleDetail = function(articleId) {
    $rootScope.transitionForward('article_detail', {id: articleId});
  };

})
.controller('PlaylistCtrl', function($scope, $stateParams) {
})
;
