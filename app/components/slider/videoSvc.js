var sliderSvc = require("./sliderSvc.js");
var svc = {};
svc.player = null;

svc.playCurrentVideo = function() {
  var activeSection = sliderSvc.getActiveSection() - 1;
  var iframe = document.querySelector("#slide0" + activeSection);
  svc.player = new Vimeo.Player(iframe);
  svc.player.play();
  svc.player.on("play", function() {
    console.log("played the video!");
  });
};

svc.currentVideoSlide = function() {
  if ($(".fp-section.active #video_1").length > 0) {
    return "video_1";
  } else if ($(".fp-section.active #video_2").length > 0) {
    return "video_2";
  } else if ($(".fp-section.active #video_3").length > 0) {
    return "video_3";
  }

  return false;
};

svc.handleVideoSlide = function() {
  if (svc.player) {
    svc.player.pause();
  }
  $(".video-pane__background-still").removeClass("hide");
  $(".video-pane__youtube").removeClass("show");

  $(".fp-section.active .watch-video").on("click", function() {
    $(".fp-section.active .video-pane__youtube").addClass("show");
    $(".fp-section.active .video-pane__background-still").addClass("hide");
    setTimeout(svc.playCurrentVideo);
  });
};

svc.scaleVideo = function() {
  var $window = $(window);
  var $video = $("iframe");
  var height = $window.height();
  $video.css("height", height);
  var videoWidth = $video.width(),
    windowWidth = $window.width(),
    marginLeftAdjust = (windowWidth - videoWidth) / 2;
  $video.css({
    height: height,
    marginLeft: marginLeftAdjust
  });
};

module.exports = svc;
