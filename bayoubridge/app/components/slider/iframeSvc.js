var iframeSvc = {};
iframeSvc.players = [];
iframeSvc.videos = [
  {
    id: "freetown",
    index: 0,
    slide: 2,
    url: "RjmISDs365Q"
  },
  {
    id: "archivist",
    index: 1,
    slide: 4,
    url: "QUqnCnTMVL0"
  }
];

function onYouTubeIframeAPIReady() {
  for (var i = 0; i < iframeSvc.videos.length; i += 1) {
    iframeSvc.players[i] = new YT.Player("iframe-" + iframeSvc.videos[i].id, {
      playerVars: {
        modestbranding: true,
        showinfo: false,
        controls: true,
        disablekb: false,
        loop: true,
        enablejsapi: true,
        rel: false
      },
      height: "100%",
      width: "100%",
      videoId: iframeSvc.videos[i].url,
      events: {
        //onReady: onPlayerReady
      }
    });
  }
}