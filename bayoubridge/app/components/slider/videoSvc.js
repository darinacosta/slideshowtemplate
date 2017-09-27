var sliderSvc = require("./sliderSvc.js");
var svc = {};
var player;
var $cover = null;
var $iframe = null;
var currentiframe = null;

svc.player = null;
svc.$videoPaneContainers = $(".video-pane__container");

// Create Youtube Iframe API script
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Used for Vimeo embeds with API
svc.playCurrentVimeoVideo = function() {
  var activeSection = sliderSvc.getActiveSection() - 1;
  var iframe = document.querySelector("#slide0" + activeSection);
  svc.player = new Vimeo.Player(iframe);
  svc.player.play();
  svc.player.on("play", function() {
    console.log("played the video!");
  });
};

// Used for Youtube videos not loaded by Iframe API
svc.playCurrentYoutubeVideo = function(ev) {
  var activeSection = sliderSvc.getActiveSection() - 1;
  var iframe = document.querySelector("#videoslide0" + activeSection);
  iframe.src += "&autoplay=1";
  ev.preventDefault();
};

svc.hideIframeEmbeds = function() {
  svc.$videoPaneContainers.removeClass("show");
};

svc.currentVideoSlide = function() {
  if ($(".fp-section.active #video_0").length > 0) {
    return 0;
  } else if ($(".fp-section.active #video_1").length > 0) {
    return 1;
  } else if ($(".fp-section.active #video_2").length > 0) {
    return 2;
  } else if ($(".fp-section.active #video_3").length > 0) {
    return 3;
  } else if ($(".fp-section.active #video_4").length > 0) {
    return 4;
  }

  return false;
};

svc.playIframeVideo = function() {
  $iframe.addClass("show");
  $iframe.removeClass("hide");
  $cover.removeClass("show");
  $cover.addClass("hide");
  svc.$videoPaneContainers.addClass("show");
  currentIframe.playVideo();
  sliderSvc.upArrow.css("visibility", "hidden");
  sliderSvc.downArrow.css("visibility", "hidden");
  //setTimeout(svc.playCurrentYoutubeVideo);
};

svc.stopIframeVideo = function() {
  svc.$videoPaneContainers.addClass("hide");
  svc.$videoPaneContainers.removeClass("show");
  $cover.addClass("show");
  $cover.removeClass("hide");
  $iframe.removeClass("show");
  $iframe.addClass("hide");
  currentIframe.pauseVideo();
  sliderSvc.upArrow.css("visibility", "visible");
  sliderSvc.downArrow.css("visibility", "visible");
};

svc.handleVideoSlide = function(index) {
  if (svc.player) {
    svc.player.pause();
  }
  // @TODO: clean up hide/show class handling
  currentIframe = iframeSvc.players[svc.currentVideoSlide()];
  console.log("IFRAME PLAYERS", iframeSvc.players);
  $cover = $(".hide-on-play");
  $iframe = $(".video-pane__youtube");
  $cover.removeClass("hide");
  $iframe.removeClass("show");
  $(".fp-section.active .watch-video").on("click", svc.playIframeVideo);
  $(".fp-section.active .video-pane__video-close").on(
    "click",
    svc.stopIframeVideo
  );
};

document.body.onkeyup = function(e) {
  if (e.keyCode == 32) {
    console.log("CAPTURED KEYSTROKE");
    svc.playIframeVideo();
  }
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
