/*   This is the base file for the Sokoban assignment - include this one in your HTML page, before you add the main script file*/

/*   Enum of CSS Classes for the static elements   */
var Tiles = {
  Wall: "tile-wall",
  Space: "tile-space",
  Goal: "tile-goal",
};

/*   Enum of CSS Classes for the moving elements   */
var Entities = {
  Character: "entity-player",
  Block: "entity-block",
  BlockDone: "entity-block-goal",
};

/*  Legend
    W = Wall
    B = Movable block
    P = Player starting position
    G = Goal area for the blocks
*/
var tileMap01 = {
  width: 19,
  height: 16,
  mapGrid: 
  [
    [[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],],
    [[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],],
    [[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],],
    [[" "],[" "],[" "],[" "],["W"],["W"],["W"],["W"],["W"],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],],
    [[" "],[" "],[" "],[" "],["W"],[" "],[" "],[" "],["W"],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],],
    [[" "],[" "],[" "],[" "],["W"],["B"],[" "],[" "],["W"],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],],
    [[" "],[" "],["W"],["W"],["W"],[" "],[" "],["B"],["W"],["W"],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],],
    [[" "],[" "],["W"],[" "],[" "],["B"],[" "],["B"],[" "],["W"],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],],
    [["W"],["W"],["W"],[" "],["W"],[" "],["W"],["W"],[" "],["W"],[" "],[" "],[" "],["W"],["W"],["W"],["W"],["W"],["W"],],
    [["W"],[" "],[" "],[" "],["W"],[" "],["W"],["W"],[" "],["W"],["W"],["W"],["W"],["W"],[" "],[" "],["G"],["G"],["W"],],
    [["W"],[" "],["B"],[" "],[" "],["B"],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],["G"],["G"],["W"],],
    [["W"],["W"],["W"],["W"],["W"],[" "],["W"],["W"],["W"],[" "],["W"],["P"],["W"],["W"],[" "],[" "],["G"],["G"],["W"],],
    [[" "],[" "],[" "],[" "],["W"],[" "],[" "],[" "],[" "],[" "],["W"],["W"],["W"],["W"],["W"],["W"],["W"],["W"],["W"],],
    [[" "],[" "],[" "],[" "],["W"],["W"],["W"],["W"],["W"],["W"],["W"],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],],
    [[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],],
    [[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],],
  ],
};

for(var i=0;i<tileMap01.height;i++){

  for(var j=0;j<tileMap01.width;j++){

      let newDiv=document.createElement("div");

      if(tileMap01.mapGrid[i][j] == "W"){
        newDiv.classList.add("Wall");
      }
      else if(tileMap01.mapGrid[i][j] == "B"){
        newDiv.classList.add("Box");
      }
      else if(tileMap01.mapGrid[i][j] == "P"){
        newDiv.classList.add("Player");
      }
      else if(tileMap01.mapGrid[i][j] == "G"){
        newDiv.classList.add("G");
      }
      else {
        newDiv.classList.add("Blank");
      }
      
      document.getElementById("container").appendChild(newDiv);
  }
}

function findPlayerCoords() {
  const y = tileMap01.mapGrid.findIndex(row => row.includes(P))
  const x = tileMap01.mapGrid[y].indexOf(P)
  
  return {
    x,
    y,
    above: map[y - 1][x],
    below: map[y + 1][x],
    sideLeft: map[y][x - 1],
    sideRight: map[y][x + 1],
  }
}