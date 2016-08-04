angular.module('bella', ['ionic', 'bella.routes', 'bella.controllers', 'ngResource'])

.run(function($ionicPlatform, $rootScope, $ionicViewSwitcher, $state) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    /*if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }*/
    /*if (window.StatusBar) {
      StatusBar.styleDefault();
    }*/

    // HTMLElement原型链
    HTMLElement.prototype.__defineGetter__("currentStyle", function () {
      return this.ownerDocument.defaultView.getComputedStyle(this, null);
    });

    //页面切换动画效果
    $rootScope.navGoBack = function(stateName, toParams) {
      $ionicViewSwitcher.nextDirection('back');
      if (stateName && stateName != '') {
        $state.go(stateName, toParams || {});
      } else {
        $rootScope.$ionicGoBack();
      }
    };
    $rootScope.transitionForward = function(stateName, toParams) {
      $ionicViewSwitcher.nextDirection('forward');
      $state.go(stateName, toParams || {});
    };
    $rootScope.transitionBack = function(stateName, toParams) {
      $ionicViewSwitcher.nextDirection('back');
      $state.go(stateName, toParams || {});
    };

  });
})
.config(function($ionicConfigProvider) {
  // ionic控件配置
  $ionicConfigProvider.views.maxCache(5);
  $ionicConfigProvider.tabs.position('bottom');
  $ionicConfigProvider.navBar.alignTitle('center');
  $ionicConfigProvider.tabs.style('standard');
  $ionicConfigProvider.views.transition('ios');
  $ionicConfigProvider.backButton.previousTitleText(false);
  $ionicConfigProvider.backButton.text('');
  $ionicConfigProvider.scrolling.jsScrolling(true);
  $ionicConfigProvider.spinner.icon('ios');
})
.config(function($resourceProvider) {
  $resourceProvider.defaults.actions.save = {
    method: 'POST',
    timeout: 10000,
    headers:{
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: function(data, headersGetter) {
      var tail = '';
      for (var key in data) {
        tail += key + '=' + data[key] + '&';
      }
      tail = tail.substring(0, tail.length - 1);
      return tail;
    }
  };
})
;
