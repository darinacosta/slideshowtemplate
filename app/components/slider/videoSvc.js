var sliderSvc = require("./sliderSvc.js");
var svc = {};
var player;
svc.player = null;

var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

svc.playCurrentVimeoVideo = function() {
  var activeSection = sliderSvc.getActiveSection() - 1;
  var iframe = document.querySelector("#slide0" + activeSection);
  svc.player = new Vimeo.Player(iframe);
  svc.player.play();
  svc.player.on("play", function() {
    console.log("played the video!");
  });
};

svc.playCurrentYoutubeVideo = function(ev) {
  var activeSection = sliderSvc.getActiveSection() - 1;
  var iframe = document.querySelector("#videoslide0" + activeSection);
  console.log("TIME --- >", iframe.getCurrentTime());
  iframe.src += "&autoplay=1";
  ev.preventDefault();
};

svc.currentVideoSlide = function() {
  if ($(".fp-section.active #video_1").length > 0) {
    return 0;
  } else if ($(".fp-section.active #video_2").length > 0) {
    return 1;
  } else if ($(".fp-section.active #video_3").length > 0) {
    return 2;
  }

  return false;
};

svc.handleVideoSlide = function(index) {
  if (svc.player) {
    svc.player.pause();
  }
  $(".video-pane__background-still").removeClass("hide");
  $(".video-pane__youtube").removeClass("show");
  $(".fp-section.active .watch-video").on("click", function() {
    $(".fp-section.active .video-pane__youtube").addClass("show");
    $(".fp-section.active .video-pane__background-still").addClass("hide");
    console.log(iframeSvc);
    iframeSvc.players[svc.currentVideoSlide()].playVideo();
    //setTimeout(svc.playCurrentYoutubeVideo);
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
