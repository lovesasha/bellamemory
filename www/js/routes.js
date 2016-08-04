angular.module('bella.routes', [])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    // 侧边栏导航菜单
    .state('app', {
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })

    // 底部导航菜单
    .state('app.tabs', {
      url: '/tabs',
      abstract: true,
      views: {
        'menuContent': {
          templateUrl: 'templates/tabs.html',
          controller: 'TabsCtrl'
        }
      }
    })
    .state('app.tabs.community', {
      url: '/community',
      views: {
        'tab-community': {
          templateUrl: 'templates/community/community.html',
          controller: 'CommunityCtrl'
        }
      }
    })
    .state('app.tabs.activity', {
      url: '/activity',
      views: {
        'tab-activity': {
          templateUrl: 'templates/activity/activity.html'
        }
      }
    })
    .state('app.tabs.mall', {
      url: '/mall',
      views: {
        'tab-mall': {
          templateUrl: 'templates/mall/mall.html'
        }
      }
    })
    .state('app.tabs.album', {
      url: '/album',
      views: {
        'tab-album': {
          templateUrl: 'templates/album/album.html'
        }
      }
    })
    .state('app.tabs.memory', {
      url: '/memory',
      views: {
        'tab-memory': {
          templateUrl: 'templates/memory/memory.html'
        }
      }
    })

    .state('article_detail', {
      url: '/article_detail/:id',
      templateUrl: 'templates/community/article_detail.html'
    })
  ;

  $urlRouterProvider.otherwise('/tabs/community');
})
;
