var Modernizr = require("modernizr");

var svc = {};
svc.videoHost = "https://s3.amazonaws.com/fireriver/trueblack/";
svc.videoUrls = [
  {
    url: "us_all_pipelines",
    caption: "Caption one",
    mapId: "pipeline",
    title: "Title One",
    default: true,
    coords: {
      x: 120,
      y: 200
    }
  },
  {
    url: "us_etp_pipelines",
    caption: "Caption Two",
    mapId: "pipeline",
    title: "Title Two",
    coords: {
      x: 120,
      y: 300
    }
  },
  {
    url: "us_etp_spills",
    caption: "Caption Three",
    mapId: "pipeline",
    title: "Title Three",
    coords: {
      x: 120,
      y: 400
    }
  },
  {
    url: "us_spills_2010",
    caption: "Caption Four",
    title: "Title Four",
    mapId: "pipeline",
    coords: {
      x: 120,
      y: 500
    }
  },
  {
    url: "la_coastal_erosion_tb",
    caption: "Erosion",
    mapId: "louisiana",
    caption: "Caption One",
    title: "Title One",
    default: true,
    coords: {
      x: 120,
      y: 200
    }
  },
  {
    url: "la_current_pipelines_tb",
    caption: "Pipelines",
    mapId: "louisiana",
    caption: "Caption Two",
    title: "Title Two",
    coords: {
      x: 120,
      y: 300
    }
  },
  {
    url: "la_pipeline_path_tb",
    caption: "Path",
    mapId: "louisiana",
    caption: "Caption Three",
    title: "Title Three",
    coords: {
      x: 120,
      y: 400
    }
  },
  {
    url: "la_pipeline_spills_tb",
    caption: "Spills",
    mapId: "louisiana",
    caption: "Caption Four",
    title: "Title Four",
    coords: {
      x: 120,
      y: 500
    }
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
  var targetVideo = $("video#" + targetId);
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
  var url = svc.videoHost + videoObject.url;
  var caption = videoObject.caption;
  var title = videoObject.title;
  svc.setActiveButton(targetId, videoId);
  svc.handleVideoReplace(targetId, url);
  $("#toggle-" + targetId + "-title").text(title);
  $("#toggle-" + targetId + "-caption").text(caption);
};

svc.buildHotspots = function(mapId) {
  var htmlString = "";
  for (var i = 0; i < svc.videoUrls.length; i += 1) {
    var videoObject = svc.videoUrls[i];
    var buttonStyle = videoObject.default ? "btn-warning" : "btn-primary";
    if (videoObject.mapId === mapId) {
      htmlString +=
        '<div class="hotspot toggle-' +
        mapId +
        " " +
        buttonStyle +
        '" id="' +
        videoObject.url +
        '" style="top:' +
        videoObject.coords.y +
        "px;right:" +
        videoObject.coords.x +
        'px" />';
    }
  }
  $(".hotspot-container#" + mapId).html(htmlString);
};

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
