var svc = {};
var sliderSvc = require("./sliderSvc.js");

svc.navBlock = $(".bayou-timeline__navBlock.travel.extra");
svc.navBlockPosition = [3, 19.66, 36.32, 52.98, 69.64, 86.3];

svc.setNavBlockTop = function(index) {
  svc.navBlock.css("top", svc.navBlockPosition[index] + "%");
};

svc.activateTimeLineComponent = function(index) {
  if (index < 1) {
    return;
  }
  var navIndex = index - 2;
  svc.setNavBlockTop(navIndex);
  setTimeout(function() {
    svc.iterateTimelineText(index - 1);
  }, 200);
};

svc.iterateTimelineText = function(index) {
  var textIndex = index + 1;
  $(".bayou-timeline__textContainer").removeClass("active");
  $(".bayou-timeline__textContainer:nth-child(" + textIndex + ")").addClass(
    "active"
  );
};

module.exports = svc;
