var $ = require("jquery");
var Parallax = require("parallax-js");

var test = {};
if (typeof $.fn.fullpage.destroy === "function") {
  $.fn.fullpage.destroy("all");
}

function _init() {
  /*
    Initialize fullpage
  */

  var activeSection = 00;
  var player;
  var scene = document.getElementById("scene");
  var parallax = new Parallax(scene);

  $("#fullpage").fullpage({
    verticalCentered: false,
    css3: true,
    sectionsColor: ["#ffffff", "#fff", "#fff", "#fff"],
    navigation: true,
    navigationPosition: "left",
    navigationTooltips: ["Home", "Video", "Slide Test"],
    afterLoad: function(anchorLink, index) {
      enableSlideActivity();
      if (index == 3) {
        $(".panel-arrow").addClass("hide");
      } else {
        $(".panel-arrow").removeClass("hide");
      }
    },
    onLeave: function(index, nextIndex, direction) {
      if (index == 3 && direction == "down") {
        $(".section").eq(index - 1).removeClass("moveDown").addClass("moveUp");
      } else if (index == 3 && direction == "up") {
        $(".section").eq(index - 1).removeClass("moveUp").addClass("moveDown");
      }

      $("#staticImg").toggleClass(
        "active",
        (index == 2 && direction == "down") || (index == 4 && direction == "up")
      );
      $("#staticImg").toggleClass("moveDown", nextIndex == 4);
      $("#staticImg").toggleClass("moveUp", index == 4 && direction == "up");
    }
  });

  /*
    Handle video resizing on page load
  */

  $(window)
    .resize(function() {
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
    })
    .resize();

  /*
    Track state
  */

  $("#click-down").on("click", function() {
    var sectionStr = $(".fp-section.active")[0].id.split("section")[1];
    activeSection = parseInt(sectionStr) - 1;
    $.fn.fullpage.moveTo(activeSection++, 0);
  });

  /*
    Slides
  */
  function enableSlideActivity() {
    // https://github.com/vimeo/player.js
    if (player) {
      player.pause();
    }
    $(".video-pane__background-still").removeClass("hide");
    $(".video-pane__youtube").removeClass("show");

    $(".fp-section.active .watch-video").on("click", function() {
      $(".fp-section.active .video-pane__youtube").addClass("show");
      $(".fp-section.active .video-pane__background-still").addClass("hide");
      setTimeout(function() {
        console.log("#slide" + activeSection + 1);

        var iframe = document.querySelector("#slide" + activeSection + 1);
        player = new Vimeo.Player(iframe);
        player.play();
        player.on("play", function() {
          console.log("played the video!");
        });
      });
    });
  }
}

$(document).ready(function() {
  console.log("HI");
  _init();
});

module.exports = test;
