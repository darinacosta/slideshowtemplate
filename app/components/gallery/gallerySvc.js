var Modernizr = require("modernizr");

var svc = {};
svc.videoHost = "https://s3.amazonaws.com/fireriver/";
svc.videoUrls = {
  etpspills: {
    url: "spills_2015-2016",
    caption: "Energy Transfer Partners Oil Spills 2015 - 16"
  },
  etppath: {
    url: "etp_pipeline_us",
    caption: "Pipelines"
  },
  spills: "",
  louisiana_erosion: {
    url: "louisiana_erosion",
    caption: "Erosion"
  }
};

svc.currentVideoSlide = function() {
  if ($(".fp-section.active #pipeline-display-wrapper").length > 0) {
    return "US";
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
    src = videoUrl + ".webm";
  } else if (Modernizr.video && Modernizr.video.ogg) {
    src = videoUrl + ".ogg";
  } else {
    src = videoUrl + ".mp4";
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
  $(".toggle-pipeline").on("click", function(e) {
    var id = e.target.id;
    svc.switchVideo("pipeline", id);
  });
  svc.initGalleryKeyControls();
};

module.exports = svc;
