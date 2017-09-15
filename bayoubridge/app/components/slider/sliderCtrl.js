var $ = require("jquery");
var Parallax = require("parallax-js");
var sliderSvc = require("./sliderSvc.js");
var timelineSvc = require("./timelineSvc.js");
var videoSvc = require("./videoSvc.js");
var gallerySvc = require("./../gallery/gallerySvc.js");

var ctrl = {};
if (typeof $.fn.fullpage.destroy === "function") {
  $.fn.fullpage.destroy("all");
}

ctrl.init = function() {
  var activeSection = 00;
  var $introVid = $("#introVid");
  // var scene = document.getElementById("scene");
  // var parallax = new Parallax(scene);

  $("#fullpage").fullpage({
    verticalCentered: false,
    css3: true,
    sectionsColor: [
      "rgb(0, 0, 0)",
      "rgb(0, 0, 0)",
      "rgb(0, 0, 0)",
      "rgb(0, 0, 0)"
    ],
    navigation: true,
    navigationPosition: "hide",
    navigationTooltips: ["Home", "Pipeline Gallery", "Vieo 1"],
    afterLoad: function(anchorLink, index) {
      sliderSvc.togglePanelArrows(index);
      videoSvc.hideIframeEmbeds();
      if (index === 2) {
        timelineSvc.$timeline.css("visibility", "visible");
      }
      if (gallerySvc.currentGallerySlide() === "pipeline") {
        gallerySvc.switchVideo("pipeline", "us_all_pipelines");
        gallerySvc.buildHotspots("pipeline");
      } else if (gallerySvc.currentGallerySlide() === "louisiana") {
        gallerySvc.switchVideo("louisiana", "la_coastal_erosion_tb");
        gallerySvc.buildHotspots("louisiana");
      }
      videoSvc.handleVideoSlide(index);
    },
    onLeave: function(index, nextIndex, direction) {
      timelineSvc.activateTimeLineComponent(nextIndex);
      if (index === 1) {
        $introVid.fadeTo("slow", 0);
      } else if (index === 2 && nextIndex === 1) {
        $introVid.fadeTo("slow", 1);
        timelineSvc.$timeline.css("visibility", "hidden");
      }
    }
  });

  $("#click-down").on("click", function() {
    activeSection = sliderSvc.getActiveSection();
    $.fn.fullpage.moveTo(activeSection + 1, 0);
  });

  $("#click-up").on("click", function() {
    activeSection = sliderSvc.getActiveSection();
    $.fn.fullpage.moveTo(activeSection - 1, 0);
  });

  gallerySvc.init();
};

module.exports = ctrl;