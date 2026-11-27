let releases = [
  {
    name: "Miss Sepia",
    cover: "song_scroll/miss-sepia.png",
    audiolink: "song_scroll/miss-sepia.mp3",
	alt: "A stylized drawing about a girl riding a horse in the Wild West.",
	moretext: '<a href="https://www.newgrounds.com/audio/listen/1648271">Newgrounds</a> // <a href="https://soundcloud.com/fkpcmusic/miss-sepia">SoundCloud</a> // <a href="https://www.youtube.com/watch?v=jRAvMttRu48">YouTube</a>'
  },
  {
    name: "Mulberry Shrine",
    cover: "https://raw.githubusercontent.com/fkpcomposer/fkpcomposer.github.io/refs/heads/main/song_scroll/mulberry-shrine.jpg",
    audiolink: "song_scroll/mulberry-shrine.mp3",
	alt: "A heavily edited photograph of a mulberry tree.",
	moretext: '<a href="https://www.newgrounds.com/audio/listen/1616799">Newgrounds</a> // <a href="https://soundcloud.com/fkpcmusic/mulberry-shrine">SoundCloud</a> // <a href="https://www.youtube.com/watch?v=aljmYLrimdo">YouTube</a>'
  },
  {
    name: "Midnight in Scratchtown (Original Soundtrack)",
    cover: "song_scroll/mis-ost.png",
    audiolink: "song_scroll/midnight-in-scratchtown.mp3",
	alt: "A hand-made drawing of a ghost wandering around a town haunted by other ghosts.",
	moretext: '<a href="https://www.newgrounds.com/album/571450/midnight-in-scratchtown-ost">Newgrounds</a> // <a href="https://soundcloud.com/fkpcmusic/sets/mis-soundtrack">SoundCloud</a> // <a href="https://www.youtube.com/playlist?list=PLf5a8BxzurXA">YouTube</a>'
  },
  {
    name: "Acrobatics",
    cover: "song_scroll/acrobatics.png",
    audiolink: "song_scroll/acrobatics.mp3",
	alt: "A vector drawing about a black circle with legs running desperately from colorful geometrical shapes.",
	moretext: '<a href="https://www.newgrounds.com/audio/listen/1563405">Newgrounds</a> // <a href="https://www.youtube.com/watch?v=PbU0cfg9Rdk">YouTube</a>'
  },
  {
    name: "Siga A Estrada",
    cover: "song_scroll/siga-a-estrada.png",
    audiolink: "song_scroll/siga-a-estrada.mp3",
	alt: "A turtle with wheels and a race-car-themed shell wearing googles. The turtle runs on a street and there is an island with multiple different areas visible in the background.",
	moretext: '<a href="https://www.newgrounds.com/audio/listen/1604047">Newgrounds</a> // <a href="https://soundcloud.com/fkpcmusic/siga-a-estrada">SoundCloud</a> // <a href="https://www.youtube.com/watch?v=0DLm8-PNZI0">YouTube</a>'
  },
  {
    name: "Outer Signal",
    cover: "song_scroll/outer-signal.png",
    audiolink: "song_scroll/outer-signal.mp3",
	alt: "None yet.",
	moretext: '<a href="https://www.newgrounds.com/audio/listen/1516336">Newgrounds</a> // <a href="https://www.youtube.com/watch?v=QWaYQnW2l-E">YouTube</a>'
  },
  {
    name: "Supernatural Follower",
    cover: "song_scroll/supernatural-follower.png",
    audiolink: "song_scroll/supernatural-follower.mp3",
	alt: "A drawing portraying a teen cat boy running from weird creatures: A big gray bell with eyes inside of its cracks, a giant horse chess piece and multiple round blue blobs, each having a tophat and two small horns, below the floor.",
	moretext: '<a href="https://www.newgrounds.com/audio/listen/1599388">Newgrounds</a> // <a href="https://soundcloud.com/fkpcmusic/supernatural-follower">SoundCloud</a> // <a href="https://www.youtube.com/watch?v=VgBy0HjWQus">YouTube</a>'
  }
];

for (let i = 0; i < releases.length; i++){
let img = new Image();
img.src = releases[i].cover;
img.alt = releases[i].alt
img.title = releases[i].name
img.onclick = () => {changePlayerSong(releases[i].name, releases[i].moretext, releases[i].audiolink)}
document.getElementById("songscroll").appendChild(img);
}

function changePlayerSong(name, links, audiolink) {
    document.getElementById("playername").innerHTML = name;
	document.getElementById("playermoretext").innerHTML = links
    document.getElementById("playeraudio").src = audiolink;
	document.getElementById("playeraudio").play();
}

document.getElementById('playeraudio').addEventListener("ended",function() {
	let prevtext = document.getElementById("playername").innerHTML
	document.getElementById("playername").innerHTML = prevtext + " (preview ended)";
})
