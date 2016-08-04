var songs = [];

songs[songs.length] = "minimo > by Bob-marley on the album minto";
songs[songs.length] = "why me > by Eminium on the album swear";
songs[songs.length] = "whtasup > by shaggy on the album Eliminator";
songs[songs.length] = "another day > by Cold play on the album again";
songs[songs.length] = "see you > by Tupac on the album all eyez";
songs[songs.length] = "cool me > by Fat joe on the album only me";

var finalArray = [];
var finalSongs=document.getElementById("yellow-box");
for (i = 0; i < songs.length; i++) {
    var removeThings = songs[i].replace(/[^a-z0-9\s\>]/gi, "");
    var replaceGreaterThan = removeThings.replace(">", "-");

  finalArray.push(replaceGreaterThan)
  var songName = replaceGreaterThan.slice(0, replaceGreaterThan.indexOf(" -"));
    var artistName = replaceGreaterThan.slice(replaceGreaterThan.indexOf("by")+3, replaceGreaterThan.indexOf("on the album"));
    var albumName = replaceGreaterThan.slice(replaceGreaterThan.indexOf("album")+6);
console.log("song",songName);
console.log("artist",artistName);
console.log("album",albumName);


  finalSongs.innerHTML += `
  <div>
    <h2>${songName}</h2>
    <ol>
      <li>${artistName}</li>
      <li>|</li>
      <li>${albumName}</li>
      <li>|</li>
      <li>Genre</li>
    </ol>
  </div>`
}
console.log(finalArray);
