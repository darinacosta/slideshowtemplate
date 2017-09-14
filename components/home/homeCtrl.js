mossville.controller('homeCtrl', ['$scope', '$location', '$anchorScroll', 'easingSvc',
function($scope, $location, $anchorScroll, easingSvc) {
	easingSvc.initializeEasing(jQuery);

    $scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
    };

    $(document).ready(function() {
      $('.header-video').each(function(i, elem) {
          headerVideo = new HeaderVideo({
            element: elem,
            media: '.header-video__media',
            playTrigger: '.header-video__play-trigger',
            closeTrigger: '.header-video__close-trigger'
          });
      });
    });
}]);
