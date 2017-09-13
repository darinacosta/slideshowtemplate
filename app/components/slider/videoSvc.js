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

// Wait until the video meta data has loaded
$("#section0 video").on("loadedmetadata", function() {
  var $width,
    $height, // Width and height of screen
    $vidwidth = this.videoWidth, // Width of video (actual width)
    $vidheight = this.videoHeight, // Height of video (actual height)
    $aspectRatio = $vidwidth / $vidheight; // The ratio the video's height and width are in
  (adjSize = function() {
    // Create function called adjSize
    $width = $(window).width(); // Width of the screen
    $height = $(window).height(); // Height of the screen
    $boxRatio = $width / $height; // The ratio the screen is in
    $adjRatio = $aspectRatio / $boxRatio; // The ratio of the video divided by the screen size
    // Set the container to be the width and height of the screen
    $("#section0").css({ width: $width + "px", height: $height + "px" });
    if ($boxRatio < $aspectRatio) {
      $vid = $("#section0 video").css({ width: $width * $adjRatio + "px" });
    } else {
      $vid = $("#section0 video").css({ width: $width + "px" });
    }
  })(); // Run function immediately
});

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
