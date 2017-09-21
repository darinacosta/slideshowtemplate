"use strict";
var timelineSvc = require("./timelineSvc.js");

var svc = {};

svc.numberOfSections = $(".section").length;
svc.upArrow = $(".panel-arrow-up");
svc.downArrow = $(".panel-arrow-down");
svc.$characterContainers = $("#character-gallery .character-container");

svc.characterDetails = [
  {
    id: "general",
    title: "The General",
    description: "lorem ipsum"
  },
  {
    id: "archivist",
    title: "The Archivist",
    description: "lorem ipsum"
  },
  {
    id: "freetown",
    title: "Freetown",
    description: "lorem ipsum"
  }
];

svc.getActiveSection = function() {
  var sectionIndex = $(".fp-section.active").index();
  return sectionIndex + 1;
};

svc.togglePanelArrows = function(index) {
  if (index === 1) {
    svc.upArrow.css("visibility", "hidden");
  } else if (index === svc.numberOfSections) {
    svc.upArrow.css("visibility", "visible");
    svc.downArrow.css("visibility", "hidden");
  } else {
    svc.downArrow.css("visibility", "visible");
    svc.upArrow.css("visibility", "visible");
  }
};

svc.expandCharacterContainer = function(e) {
  if (!e.target.id || $("#character-gallery #" + e.target.id).length === 0) {
    return;
  }
  var characterId = e.target.id.split("character-")[1];
  var $otherContainers = $(
    "#character-gallery .character-container:not(#" + e.target.id + ")"
  );
  var $activeContainer = $(
    "#character-gallery .character-container#" + e.target.id
  );
  $(".character-caption").css("display", "none");
  svc.$characterContainers.removeClass("active");
  svc.$characterContainers.removeClass("col-xs-4");
  svc.$characterContainers.removeClass("col-xs-6");
  svc.$characterContainers.removeClass("col-xs-3");
  $("#character-gallery #" + e.target.id).addClass("col-xs-6");
  $activeContainer.addClass("active");
  $otherContainers.addClass("col-xs-3");
  $("#" + e.target.id + " .character-caption").css("display", "block");
};

svc.registerCharacterContainerClick = function() {
  $("#character-gallery").on("click", svc.expandCharacterContainer);
  svc.$characterContainers.hover(svc.expandCharacterContainer);
};

module.exports = svc;
