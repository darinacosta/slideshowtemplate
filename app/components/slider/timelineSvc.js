var svc = {};
var sliderSvc = require("./sliderSvc.js");

svc.navBlock = $(".product-timeline__navBlock.travel.extra");
svc.navBlockPosition = [3, 19.66, 36.32, 52.98, 69.64, 86.3];

svc.setNavBlockTop = function(index) {
  svc.navBlock.css("top", svc.navBlockPosition[index] + "%");
};

module.exports = svc;
