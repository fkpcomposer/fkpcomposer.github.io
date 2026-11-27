let games = [
  {
    cover: "game_scroll/midnight-in-scratchtown.png",
    description: 'During Halloween, the citizens of Scratchtown (both alive and dead) wander around in the dark. The young ones get candy and dress in costumes while the ghosts are called by the Midnight Clock to spook the unfortunate houses. You only have a few minutes to find every house, so you better be quick!",
  }
];

for (let i = 0; i < games.length; i++){
let gameDiv = document.createElement("div");

let gameImage = new Image();
gameImage.src = games[i].cover;
gameImage.style = "border-radius:10px;";
document.getElementById("gamescroll").appendChild(gameImage);
}
