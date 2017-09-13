"use strict";
var timelineSvc = require("./timelineSvc.js");

var svc = {};

svc.numberOfSections = $(".section").length;
svc.upArrow = $(".panel-arrow-up");
svc.downArrow = $(".panel-arrow-down");

svc.getActiveSection = function() {
  var sectionIndex = $(".fp-section.active").index();
  return sectionIndex + 1;
};

svc.togglePanelArrows = function(index) {
  if (index === 1) {
    svc.upArrow.css("visibility", "hidden");
  } else if (index === svc.numberOfSections) {
    svc.downArrow.css("visibility", "hidden");
  } else {
    svc.downArrow.css("visibility", "visible");
    svc.upArrow.css("visibility", "visible");
  }
};

module.exports = svc;
