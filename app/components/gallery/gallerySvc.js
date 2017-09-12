var Modernizr = require("modernizr");

var svc = {};
svc.videoHost = "https://s3.amazonaws.com/fireriver/trueblack/";
svc.videoUrls = {
  us_all_pipelines: {
    url: "us_all_pipelines",
    caption: "Energy Transfer Partners Oil Spills 2015 - 16",
    mapId: "pipeline"
  },
  us_etp_pipelines: {
    url: "us_etp_pipelines",
    caption: "Pipelines",
    mapId: "pipeline"
  },
  us_etp_spills: {
    url: "us_etp_spills",
    caption: "Pipelines",
    mapId: "pipeline"
  },
  us_spills_2010: {
    url: "us_spills_2010",
    caption: "Pipelines",
    mapId: "pipeline"
  },
  louisiana_erosion: {
    url: "blacktest",
    caption: "Erosion",
    mapId: "louisiana"
  }
};

svc.currentVideoSlide = function() {
  if ($(".fp-section.active #pipeline").length > 0) {
    return "pipeline";
  }

  return false;
};

svc.initGalleryKeyControls = function() {
  $(document).keydown(function(e) {
    switch (e.which) {
      case 37: // left
        break;

      case 38: // up
        break;

      case 39: // right
        console.log("RIGHTKEY");
        break;

      case 40: // down
        break;

      default:
        return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
  });
};

svc.handleVideoReplace = function(targetId, videoUrl) {
  var targetVideo = $("#" + targetId);
  var src = videoUrl;
  if (Modernizr.video && Modernizr.video.webm) {
    src = videoUrl + ".mp4";
  } else if (Modernizr.video && Modernizr.video.ogg) {
    src = videoUrl + ".webm";
  } else {
    src = videoUrl + ".ogv";
  }
  targetVideo.attr("src", src);
};

svc.setActiveButton = function setActiveButton(targetId, videoId) {
  $(".toggle-" + targetId).removeClass("btn-warning");
  $(".toggle-" + targetId).addClass("btn-primary");
  $(".toggle-" + targetId + "#" + videoId).removeClass("btn-primary");
  $(".toggle-" + targetId + "#" + videoId).addClass("btn-warning");
};

svc.switchVideo = function(targetId, videoId) {
  var url = svc.videoHost + svc.videoUrls[videoId].url;
  var caption = svc.videoUrls[videoId].caption;
  svc.setActiveButton(targetId, videoId);
  svc.handleVideoReplace(targetId, url);
  $("#toggle-" + targetId + "-caption").text(caption);
};

svc.init = function() {
  $(".toggle-gallery").on("click", function(e) {
    var videoId = e.target.id;
    var mapId = svc.videoUrls[videoId].mapId;
    svc.switchVideo(mapId, videoId);
  });
  svc.initGalleryKeyControls();
};

module.exports = svc;
