var Modernizr = require("modernizr");

var svc = {};
svc.videoHost = "https://s3.amazonaws.com/fireriver/trueblack/";
svc.videoUrls = [
  {
    url: "us_all_pipelines",
    caption: "Energy Transfer Partners Oil Spills 2015 - 16",
    mapId: "pipeline",
    coords: {
      x: 50,
      y: 50
    }
  },
  {
    url: "us_etp_pipelines",
    caption: "Pipelines",
    mapId: "pipeline",
    coords: {
      x: 50,
      y: 80
    }
  },
  {
    url: "us_etp_spills",
    caption: "Pipelines",
    mapId: "pipeline",
    coords: {
      x: 50,
      y: 150
    }
  },
  {
    url: "us_spills_2010",
    caption: "Pipelines",
    mapId: "pipeline",
    coords: {
      x: 50,
      y: 190
    }
  },
  {
    url: "la_coastal_erosion_tb",
    caption: "Erosion",
    mapId: "louisiana"
  },
  {
    url: "la_current_pipelines_tb",
    caption: "Pipelines",
    mapId: "louisiana"
  },
  {
    url: "la_pipeline_path_tb",
    caption: "Path",
    mapId: "louisiana"
  },
  {
    url: "la_pipeline_spills_tb",
    caption: "Spills",
    mapId: "louisiana"
  }
];

svc.getVideoObject = function(id) {
  for (var i = 0; i < svc.videoUrls.length; i++) {
    var o = svc.videoUrls[i];
    if (o.url === id) {
      return o;
    }
  }
};

svc.currentGallerySlide = function() {
  if ($(".fp-section.active #pipeline").length > 0) {
    return "pipeline";
  } else if ($(".fp-section.active #louisiana").length > 0) {
    return "louisiana";
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
  console.log("SRC", src);
  targetVideo.attr("src", src);
};

svc.setActiveButton = function setActiveButton(targetId, videoId) {
  $(".toggle-" + targetId).removeClass("btn-warning");
  $(".toggle-" + targetId).addClass("btn-primary");
  $(".toggle-" + targetId + "#" + videoId).removeClass("btn-primary");
  $(".toggle-" + targetId + "#" + videoId).addClass("btn-warning");
};

svc.switchVideo = function(targetId, videoId) {
  var videoObject = svc.getVideoObject(videoId);
  console.log("VIDEO OBJECT", videoObject);
  var url = svc.videoHost + videoObject.url;
  console.log("URL", url);
  var caption = videoObject.caption;
  svc.setActiveButton(targetId, videoId);
  svc.handleVideoReplace(targetId, url);
  $("#toggle-" + targetId + "-caption").text(caption);
};

svc.buildHotspots = function(mapId) {
  var htmlString = "";
  for (var i = 0; i < svc.videoUrls.length; i += 1) {
    var videoObject = svc.videoUrls[i];
    if (videoObject.mapId === mapId) {
      htmlString +=
        '<div class="hotspot" id="' +
        videoObject.url +
        '" style="top:' +
        videoObject.coords.y +
        "px;left:" +
        videoObject.coords.x +
        'px" />';
    }
  }
  $(".hotspot-container#pipeline").html(htmlString);
};

//svc.buildHotspots("pipeline");

svc.init = function() {
  $(".toggle-gallery").on("click", function(e) {
    var videoId = e.target.id;
    var videoObject = svc.getVideoObject(videoId);
    var mapId = videoObject.mapId;
    svc.switchVideo(mapId, videoId);
  });
  svc.initGalleryKeyControls();
};

module.exports = svc;
