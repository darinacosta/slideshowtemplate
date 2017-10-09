var $ = require("jquery");
var Parallax = require("parallax-js");
var sliderSvc = require("./sliderSvc.js");
var timelineSvc = require("./timelineSvc.js");
var videoSvc = require("./videoSvc.js");
var gallerySvc = require("./../gallery/gallerySvc.js");
var ctrl = {};

var takeActionPageIndex = sliderSvc.numberOfSections - 1;
var $takeActionButton = $("#takeactionbutton");
var currentIndex = 0;
var previousIndex = 0;

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
      "rgb(0, 0, 0)",
      "rgb(0, 0, 0)",
      "rgb(0, 0, 0)",
      "rgb(0, 0, 0)",
      "rgb(0, 0, 0)",
      "rgb(0, 0, 0)",
      "rgb(0, 0, 0)",
      "rgb(0, 0, 0)",
      "white",
      "white"
    ],
    anchors: [],
    animateAnchor: true,
    navigation: true,
    navigationPosition: "hide",
    navigationTooltips: ["Home", "Pipeline Gallery", "Vieo 1"],
    afterLoad: function(anchorLink, index) {
      currentIndex = index;
      if (index > 1) {
        sliderSvc.downArrow.removeClass("bounce-down");
      }
      sliderSvc.togglePanelArrows(index);
      videoSvc.hideIframeEmbeds();
      if (
        index === timelineSvc.timelineStartIndex ||
        index === sliderSvc.numberOfSections - 2
      ) {
        timelineSvc.$timeline.css("visibility", "visible");
      } else if (index === sliderSvc.numberOfSections - 1) {
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
      previousIndex =
        index === sliderSvc.numberOfSections - 1 ? previousIndex : index;
      timelineSvc.activateTimeLineComponent(nextIndex);
      var introVidHidden = $("#introVid:visible").length === 0;
      if (index === 1 && !introVidHidden) {
      } else if (index === 2 && nextIndex === 1) {
      }
      if (nextIndex < takeActionPageIndex) {
        $takeActionButton.text("TAKE ACTION");
        sliderSvc.upArrow.css(
          "background-image",
          "url(app/assets/img/slide-arrow-up.png)"
        );
        sliderSvc.downArrow.css(
          "background-image",
          "url(app/assets/img/slide-arrow.png)"
        );
      } else {
        $takeActionButton.text("BACK TO STORY");
        sliderSvc.upArrow.css(
          "background-image",
          "url(app/assets/img/slide-arrow-up-black.png)"
        );
        sliderSvc.downArrow.css(
          "background-image",
          "url(app/assets/img/slide-arrow-down-black.png)"
        );
      }
      if (
        index === timelineSvc.timelineStartIndex &&
        nextIndex === timelineSvc.timelineStartIndex - 1
      ) {
        timelineSvc.$timeline.css("visibility", "hidden");
      }
    }
  });

  $takeActionButton.on("click", function() {
    if (currentIndex < takeActionPageIndex) {
      $.fn.fullpage.moveTo(takeActionPageIndex);
      $takeActionButton.text("BACK TO STORY");
    } else {
      $.fn.fullpage.moveTo(previousIndex);
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

  sliderSvc.registerCharacterContainerClick();
  gallerySvc.init();
};

module.exports = ctrl;
