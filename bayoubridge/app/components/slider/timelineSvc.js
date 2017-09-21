var svc = {};
var sliderSvc = require("./sliderSvc.js");
svc.timeLineLength = $(".bayou-timeline__textContainer").length;
svc.timeLineTextContainerHeight = 100 / svc.timeLineLength;
svc.navBlock = $(".bayou-timeline__navBlock.travel.extra");
svc.navBlockPosition = [5];
svc.$timeline = $(".bayou-timeline");
svc.timelineStartIndex = 3;

(function calculateTimelineNavPosition() {
  var navBlockTotal = svc.navBlockPosition[0];
  var navBlockStart = svc.navBlockPosition[0] / 100;
  for (var i = 0; i < svc.timeLineLength; i += 1) {
    navBlockTotal += svc.timeLineTextContainerHeight;
    svc.navBlockPosition.push(navBlockTotal + navBlockStart);
  }
})();

svc.setNavBlockTop = function(index) {
  svc.navBlock.css("top", svc.navBlockPosition[index] + "%");
};

svc.activateTimeLineComponent = function(index) {
  console.log("INDEX", index);
  if (index < svc.timelineStartIndex) {
    return;
  }
  var navIndex = index - svc.timelineStartIndex;
  svc.setNavBlockTop(navIndex);
  setTimeout(function() {
    svc.iterateTimelineText(index - 1);
  }, 200);
};

svc.iterateTimelineText = function(index) {
  var textIndex = index;
  $(".bayou-timeline__textContainer").removeClass("active");
  $(".bayou-timeline__textContainer:nth-child(" + textIndex + ")").addClass(
    "active"
  );
};

svc.initTimeline = function() {
  $(".bayou-timeline__textContainer").css(
    "height",
    svc.timeLineTextContainerHeight + "%"
  );
};

svc.initTimeline();

module.exports = svc;
