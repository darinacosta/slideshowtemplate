var $ = require("jquery");
var Parallax = require("parallax-js");
var sliderSvc = require("./sliderSvc.js");
var videoSvc = require("./videoSvc.js");
var pipelineGallery = require("./../pipeline-gallery/pipelineGallery.js");

var ctrl = {};
if (typeof $.fn.fullpage.destroy === "function") {
  $.fn.fullpage.destroy("all");
}

ctrl.init = function() {
  var activeSection = 00;
  var scene = document.getElementById("scene");
  var parallax = new Parallax(scene);

  $("#fullpage").fullpage({
    verticalCentered: false,
    css3: true,
    sectionsColor: ["#ffffff", "#fff", "#fff", "#fff"],
    navigation: true,
    navigationPosition: "left",
    navigationTooltips: ["Home", "Pipeline Gallery", "Vieo 1"],
    afterLoad: function(anchorLink, index) {
      if (pipelineGallery.currentSlideIsPipelineGallery()) {
        pipelineGallery.switchVideo("etppath");
      }
      videoSvc.handleVideoSlide();
    },
    onLeave: function(index, nextIndex, direction) {}
  });

  /*
    Track state
  */

  $("#click-down").on("click", function() {
    activeSection = sliderSvc.getActiveSection();
    $.fn.fullpage.moveTo(activeSection + 1, 0);
  });
};

module.exports = ctrl;
