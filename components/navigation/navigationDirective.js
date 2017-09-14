mossville.controller('navigationCtrl', ['$scope', '$location', 'easingSvc', function($scope, $location, easingSvc) {
  easingSvc.initializeEasing(jQuery);

  $scope.updateIcon = function(){
    var current = $location.path().substring(1);
    if (current === 'home'){
      return '<a class="navbar-brand page-scroll" href="#page-top"><img src="assets/img/MOSSVILLE_Distressed_Orange_238px.png"></a>';
    } else {
      return '<a class="navbar-brand" href="#home"><img src="assets/img/MOSSVILLE_Distressed_Orange_238px.png"></a>';
    }
  }
}]);

mossville.directive('navigation', function() {
  return {
    templateUrl: 'components/navigation/navigation.html',
    controller: 'navigationCtrl'
  };
});
