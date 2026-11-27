let games = [
  {
    cover: "game_scroll/midnight-in-scratchtown.png",
    description: 'During Halloween, the citizens of Scratchtown (both alive and dead) wander around in the dark. The young ones get candy and dress in costumes while the ghosts are called by the Midnight Clock to spook the unfortunate houses. You only have a few minutes to find every house, so you better be quick!",
  }
];

for (let i = 0; i < releases.length; i++){
let gameDiv = document.createElement("div");

let gameImage = new Image();
gameImage.src = games[i].cover;
gameImage.style = "border-radius:10px;";

let gameDesc = document.createElement("p");
gameDesc.innerHTML = games[i].desc;
gameDesc.style = "background-color:white;";

let gameLinks = document.createElement("p");
gameLinks.innerHTML = games[i].links;
gameLinks.style = "background-color:white;";

gameDiv.appendChild(gameImage);
gameDiv.appendChild(gameDesc);
gameDiv.appendChild(gameLinks);
gameDiv.style = "padding:20px;border-radius:10px;background-color:white;";
document.getElementById("gamescroll").appendChild(gameDiv);
}
