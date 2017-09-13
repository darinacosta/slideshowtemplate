var svc = {};
var sliderSvc = require("./sliderSvc.js");

svc.navBlock = $(".product-timeline__navBlock.travel.extra");
svc.navBlockPosition = [3, 19.66, 36.32, 52.98, 69.64, 86.3];

svc.setNavBlockTop = function(index) {
  svc.navBlock.css("top", svc.navBlockPosition[index] + "%");
};

svc.activateTimeLineComponent = function(index) {
  if (index === undefined) {
    return;
  }
  var navIndex = index - 1;
  svc.setNavBlockTop(navIndex);
  setTimeout(function() {
    svc.iterateTimelineText(index);
  }, 200);
};

svc.iterateTimelineText = function(index) {
  var textIndex = index + 1;
  $(".product-timeline__textContainer").removeClass("active");
  $(".product-timeline__textContainer:nth-child(" + textIndex + ")").addClass(
    "active"
  );
};

module.exports = svc;
