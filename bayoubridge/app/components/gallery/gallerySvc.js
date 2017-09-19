var Modernizr = require("modernizr");
var svc = {};
svc.videoHost = "https://s3.amazonaws.com/fireriver/trueblack/";
svc.videoUrls = [
  {
    url: "us_etp_pipelines",
    caption:
      "The Bayou Bridge Pipeline would carry oil transported via the Dakota Access pipeline to refineries and international export terminals in Louisiana.",
    mapId: "pipeline",
    loop: false,
    title: "Connection of Dakota Access Pipeline and Bayou Bridge Pipeline",
    default: true,
    coords: {
      x: 6,
      y: 20
    }
  },
  {
    url: "us_all_pipelines",
    caption:
      "There are <a href='https://hip.phmsa.dot.gov/analyticsSOAP/saw.dll?Portalpages'>73,000 miles</a> of <a href='http://www.pipeline101.org/where-are-pipelines-located'>pipelines crisscrossing the US</a> transporting crude oil.",
    mapId: "pipeline",
    loop: false,
    title: "Map of US Pipelines",
    coords: {
      x: 6,
      y: 40
    }
  },
  {
    url: "us_spills_2010",
    caption:
      "Nearly 9 million gallons of crude oil have spilled from pipelines in the United States since 2010. <i>[Source: Pipeline and Hazardous Materials Safety Administration]</i>",
    title: "Pipeline Spills Since 2010",
    loop: false,
    mapId: "pipeline",
    coords: {
      x: 6,
      y: 60
    }
  },
  {
    url: "us_etp_spills",
    caption:
      "Energy Transfer Partners and its subsidiary Sunoco have filed 69 accidents over the past two years. An average of 2.8 spills every month. <i>[Source: National Response Center]</i>",
    mapId: "pipeline",
    loop: true,
    title: "Energy Transfer Partners Spills in 2015-2016",
    coords: {
      x: 6,
      y: 80
    }
  },
  {
    url: "la_pipeline_path_tb",
    caption:
      "The Bayou Bridge pipeline would cross 11 parishes, 700 bodies of water, and impact over 600 acres of wetlands. The pipeline route runs through Bayou Lafourche, the drinking water supply for at least 300,000 people.",
    mapId: "louisiana",
    loop: false,
    default: true,
    title: "The Path Of The Bayou Bridge Pipeline",
    coords: {
      x: 6,
      y: 20
    }
  },
  {
    url: "la_current_pipelines_tb",
    caption: "Pipelines",
    mapId: "louisiana",
    loop: false,
    caption:
      "Louisiana currently has more than 50,000 miles of pipelines. <i>[Source: Department of Natural Resources]</i>",
    title: "Louisiana Pipelines",
    coords: {
      x: 6,
      y: 40
    }
  },
  {
    url: "la_coastal_erosion_tb",
    caption:
      "Louisiana has lost just under 1,900 square miles of land between 1932 and 2000 (equivalent to the state of Delaware). <i>[Source: US Geological Survey]</i>",
    mapId: "louisiana",
    title: "Louisiana's Current Inhabitable Land",
    loop: false,
    coords: {
      x: 6,
      y: 60
    }
  },
  {
    url: "la_pipeline_spills_tb",
    caption:
      "There were 144 reported pipeline accidents in 2016. An average of 2.7 per week and doesn’t include the accidents that are not reported.",
    mapId: "louisiana",
    loop: true,
    title: "Louisiana Pipeline Accidents",
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
  $(".toggle-" + targetId + "-caption").html(caption);
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
