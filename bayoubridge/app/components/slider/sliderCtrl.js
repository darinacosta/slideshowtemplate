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
    anchors: [],
    animateAnchor: true,
    navigation: true,
    navigationPosition: "hide",
    navigationTooltips: ["Home", "Pipeline Gallery", "Vieo 1"],
    afterLoad: function(anchorLink, index) {
      console.log("INDEX", index);
      if (index > 1) {
        sliderSvc.downArrow.removeClass("bounce-down");
      }
      sliderSvc.togglePanelArrows(index);
      videoSvc.hideIframeEmbeds();
      if (index === 3 || index === sliderSvc.numberOfSections - 1) {
        timelineSvc.$timeline.css("visibility", "visible");
      } else if (index === sliderSvc.numberOfSections) {
        timelineSvc.$timeline.css("visibility", "hidden");
      }
      if (gallerySvc.currentGallerySlide() === "pipeline") {
        gallerySvc.switchVideo("pipeline", "us_etp_pipelines");
        gallerySvc.buildHotspots("pipeline");
      } else if (gallerySvc.currentGallerySlide() === "louisiana") {
        gallerySvc.switchVideo("louisiana", "la_pipeline_path_tb");
        gallerySvc.buildHotspots("louisiana");
      }
      videoSvc.handleVideoSlide(index);
    },
    onLeave: function(index, nextIndex, direction) {
      timelineSvc.activateTimeLineComponent(nextIndex);
      var introVidHidden = $("#introVid:visible").length === 0;
      if (index === 1 && !introVidHidden) {
        $introVid.fadeTo("slow", 0);
      } else if (index === 2 && nextIndex === 1) {
        if (!introVidHidden) {
          $introVid.fadeTo("slow", 1);
        }
      } else if (index === 3 && nextIndex === 2) {
        timelineSvc.$timeline.css("visibility", "hidden");
      }
    }
  });

  sliderSvc.downArrow.on("click", function() {
    activeSection = sliderSvc.getActiveSection();
    $.fn.fullpage.moveTo(activeSection + 1, 0);
  });

  sliderSvc.upArrow.on("click", function() {
    activeSection = sliderSvc.getActiveSection();
    $.fn.fullpage.moveTo(activeSection - 1, 0);
  });

  $(".take-action-button").on("click", function() {
    $.fn.fullpage.moveTo(sliderSvc.numberOfSections);
  });

  sliderSvc.registerCharacterContainerClick();
  gallerySvc.init();
};

module.exports = ctrl;
