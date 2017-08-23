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
  spills: ""
};

svc.currentSlideIsPipelineGallery = function() {
  return $(".fp-section.active #pipeline-display-wrapper").length > 0;
};

svc.handleVideoReplace = function(videoUrl) {
  var targetVideo = $("#pipeline");
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

svc.switchVideo = function(id) {
  var url = svc.videoHost + svc.videoUrls[id].url;
  var caption = svc.videoUrls[id].caption;
  setActiveButton(id);
  svc.handleVideoReplace(url);
  $("#toggle-pipeline-caption").text(caption);
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

function setActiveButton(id) {
  $(".toggle-pipeline").removeClass("btn-warning");
  $(".toggle-pipeline").addClass("btn-primary");
  $(".toggle-pipeline#" + id).removeClass("btn-primary");
  $(".toggle-pipeline#" + id).addClass("btn-warning");
}

$(".toggle-pipeline").on("click", function(e) {
  var id = e.target.id;
  svc.switchVideo(id);
});

module.exports = svc;
