var iframeSvc = {};
iframeSvc.players = [];
iframeSvc.videos = [
  {
    id: "dallas",
    url: "nSvaEvhZARY",
    index: 0,
    slide: 1
  },
  {
    id: "archivist",
    index: 1,
    slide: 2,
    url: "HS50KyuEaxM"
  },
  {
    id: "freetown",
    index: 2,
    slide: 4,
    url: "7_kxSLHLJcE"
  },
  {
    id: "general",
    index: 2,
    slide: 4,
    url: "_iKkWBqr67Q"
  },
  {
    id: "fisherman",
    index: 2,
    slide: 4,
    url: "EyLn3GgfJSE"
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
