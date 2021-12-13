// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() { // 이 함수 이름은 바꾸면 안 됨
  new YT.Player('player', { // # 안 씀 알아서 찾아줌
    videoId: 'An6LvWQuj_8', // 최초 재생할 영상 아이디
    playerVars: {
        autoplay: true,
        loop: true,
        playlist: 'An6LvWQuj_8', // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
        onReady: function (event) { // 메소드
            event.target.mute() // 음소거
        }
    }
  });
}