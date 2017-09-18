var Modernizr = require("modernizr");
var svc = {};
svc.videoHost = "https://s3.amazonaws.com/fireriver/trueblack/";
svc.videoUrls = [
  {
    url: "us_etp_pipelines",
    caption: "Caption Two",
    mapId: "pipeline",
    loop: false,
    title: "Title Two",
    default: true,
    coords: {
      x: 6,
      y: 20
    }
  },
  {
    url: "us_all_pipelines",
    caption: "Caption one",
    mapId: "pipeline",
    loop: false,
    title: "Title One",
    coords: {
      x: 6,
      y: 40
    }
  },
  {
    url: "us_etp_spills",
    caption: "Caption Three",
    mapId: "pipeline",
    loop: true,
    title: "Title Three",
    coords: {
      x: 6,
      y: 60
    }
  },
  {
    url: "us_spills_2010",
    caption: "Caption Four",
    title: "Title Four",
    loop: false,
    mapId: "pipeline",
    coords: {
      x: 6,
      y: 80
    }
  },
  {
    url: "la_pipeline_path_tb",
    caption: "Path",
    mapId: "louisiana",
    loop: false,
    default: true,
    caption: "Caption One",
    title: "Title One",
    coords: {
      x: 6,
      y: 20
    }
  },
  {
    url: "la_coastal_erosion_tb",
    caption: "Erosion",
    mapId: "louisiana",
    caption: "Caption Two",
    loop: false,
    title: "Title Two",
    coords: {
      x: 6,
      y: 40
    }
  },
  {
    url: "la_current_pipelines_tb",
    caption: "Pipelines",
    mapId: "louisiana",
    loop: false,
    caption: "Caption Three",
    title: "Title Three",
    coords: {
      x: 6,
      y: 60
    }
  },
  {
    url: "la_pipeline_spills_tb",
    caption: "Spills",
    mapId: "louisiana",
    loop: true,
    caption: "Caption Four",
    title: "Title Four",
    coords: {
      x: 6,
      y: 80
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

svc.handleVideoReplace = function(targetId, videoObject) {
  var videoUrl = svc.videoHost + videoObject.url;
  var targetVideo = $("video#" + targetId);
  targetVideo.prop("loop", videoObject.loop);
  var src = videoUrl;
  if (Modernizr.video && Modernizr.video.webm) {
    src = videoUrl + ".webm";
  } else if (Modernizr.video && Modernizr.video.ogg) {
    src = videoUrl + ".ogv";
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
  var $target = $(".gallery-display-wrapper." + targetId);
  var hidden = $(".gallery-player:visible").length === 0;
  var backgroundImg =
    "url('app/assets/img/maps/" + targetId + "_background.png')";
  if (hidden) {
    $(".gallery-display-wrapper." + targetId).css(
      "background-image",
      "url('app/assets/img/maps/map-" + videoId + ".png')"
    );
  } else if ($target.css("background-image") !== backgroundImg) {
    $target.css("background-image", backgroundImg);
  }
  var videoObject = svc.getVideoObject(videoId);
  var url = svc.videoHost + videoObject.url;
  var caption = videoObject.caption;
  var title = videoObject.title;
  svc.setActiveButton(targetId, videoId);
  svc.handleVideoReplace(targetId, videoObject);
  console.log($(".toggle-" + targetId + "-title"));
  $(".toggle-" + targetId + "-title").text(title);
  $(".toggle-" + targetId + "-caption").text(caption);
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
        "%;right:" +
        videoObject.coords.x +
        '%" />';
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
