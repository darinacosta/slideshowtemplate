("use strict");

var sliderCtrl = require("./components/slider/sliderCtrl.js");

function init() {
  sliderCtrl.init();
}

$(document).ready(function() {
  init();
});
