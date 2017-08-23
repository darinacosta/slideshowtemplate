("use strict");

var sliderCtrl = require("./components/slider/sliderCtrl.js");
var pipelineGallery = require("./components/pipeline-gallery/pipelineGallery.js");

function init() {
  sliderCtrl.init();
}

$(document).ready(function() {
  init();
});
