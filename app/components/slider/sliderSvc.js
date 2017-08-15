"use strict";

var svc = {};

svc.getActiveSection = function() {
  var sectionStr = $(".fp-section.active")[0].id.split("section")[1];
  return parseInt(sectionStr) + 1;
};

svc.playCurrentVideo = function() {
  var activeSection = svc.getActiveSection() - 1;
  var iframe = document.querySelector("#slide0" + activeSection);
  var player = new Vimeo.Player(iframe);
  player.play();
  player.on("play", function() {
    console.log("played the video!");
  });
};

module.exports = svc;
