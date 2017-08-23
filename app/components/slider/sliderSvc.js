"use strict";

var svc = {};

svc.getActiveSection = function() {
  var sectionStr = $(".fp-section.active")[0].id.split("section")[1];
  return parseInt(sectionStr) + 1;
};

svc.togglePanelArrow = function(slideIndex) {
  var isLastSlide = $(".fp-section.active .fp-slide").length;
  if (isLastSlide) {
    $(".panel-arrow-down").addClass("hide");
  } else {
    $(".panel-arrow-down").removeClass("hide");
  }
};

module.exports = svc;
