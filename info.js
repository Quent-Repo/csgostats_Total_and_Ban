//JS to be used with https://csgostats.gg/player/[steamID64]#/matches
//Shows Games played and % of bans
//Better used as and extension/addon

let x = document.getElementsByClassName("p-row js-link"); // Total of games
let t = document.getElementsByClassName("p-row js-link has-banned"); // Total of bans (could have just used id="match-list-show-vac" with rex)

let nod = document.createElement("p"); //create P tag
let nod2 = document.createElement("p"); //create P tag
let textnod = document.createTextNode(x.length + " games have been played in total.\n"); // content of number of games
let textnod2 = document.createTextNode("\n" + parseInt((t.length/x.length)*100) + "% of games have been with cheaters."); // content of % of bans
nod.appendChild(textnod); //append textnod to respective P tag (const nod)
nod2.appendChild(textnod2); //append textnod2 to respective P tag (const nod2)
document.getElementById("match-list-show-vac").prepend(nod); //Add nod to html
document.getElementById("match-list-show-vac").prepend(nod2); //Add nod to html
