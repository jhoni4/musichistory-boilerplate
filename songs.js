// function showSongs(allSongs) {
//   var finalSongs = [];
//     var finalSongs = document.getElementById('yellow-box');
//   console.log(list);
//   for (var i = 0; i < allSongs.songs.length; i++) {
//     var songName = allSongs.songs[i].title;
//     var artistName = allSongs.songs[i].artist;
//     var albumName = allSongs.songs[i].album;
//     console.log(albumName[0]);
//     finalSongs.innerHTML += `
//                       <div id="oneSet--${i}">
//                         <h2 id="song--${i}">${songName}</h2>
//                         <ol>
//                           <li id="artist--${i}">${artistName}</li>
//                           <li>|</li>
//                           <lii d="album--${i}">${albumName}</li>
//                           <li>|</li>
//                           <li>Genre</li>
//                         </ol>
//                       </div>`;
//   }
// }
// -------original
// var songs = [];

// songs[songs.length] = "minimo > by Bob-marley on the album minto";
// songs[songs.length] = "why me > by Eminium on the album swear";
// songs[songs.length] = "whtasup > by shaggy on the album Terminator";
// songs[songs.length] = "another day > by Cold play on the album again";
// songs[songs.length] = "see you > by Tupac on the album all eyez";
// songs[songs.length] = "cool me > by Fat joe on the album only me";

// var finalArray = [];
// var finalSongs=document.getElementById("yellow-box");
// for (i = 0; i < songs.length; i++) {
//     var removeThings = songs[i].replace(/[^a-z0-9\s\>]/gi, "");
//     var replaceGreaterThan = removeThings.replace(">", "-");

//   finalArray.push(replaceGreaterThan)
//   var songName = replaceGreaterThan.slice(0, replaceGreaterThan.indexOf(" -"));
//     var artistName = replaceGreaterThan.slice(replaceGreaterThan.indexOf("by")+3, replaceGreaterThan.indexOf("on the album"));
//     var albumName = replaceGreaterThan.slice(replaceGreaterThan.indexOf("album")+6);
// // console.log("song",songName);
// // console.log("artist",artistName);
// // console.log("album",albumName);


//   finalSongs.innerHTML += `
//   <div>
//     <h2>${songName}</h2>
//     <ol>
//       <li>${artistName}</li>
//       <li>|</li>
//       <li>${albumName}</li>
//       <li>|</li>
//       <li>Genre</li>
//     </ol>
//   </div>`
// }
// console.log(finalArray);

/*SPA*/
// ------home------//

var homeLink = document.getElementById("nav-home");
var leftView = document.getElementById("blue-box");
var addMusic = document.getElementById("textbox");

homeLink.addEventListener("click", function() {
  leftView.classList.add("visible");
  leftView.classList.remove("hidden");
  rightView.classList.remove("hidden");
  rightView.classList.add("visible");
  addMusic.classList.add("hidden");
  addMusic.classList.remove("visible");

});


// ------Add------//

var addLink = document.getElementById("nav-add");
var rightView = document.getElementById("yellow-box");


addLink.addEventListener("click", function() {
  leftView.classList.remove("visible");
  leftView.classList.add("hidden");
  rightView.classList.remove("visible");
  rightView.classList.add("hidden");
  addMusic.classList.remove("hidden");
  addMusic.classList.add("visible");
});

// ------List---we dont need it---//

// var listLink = document.getElementById("nav-list");
// var rightView = document.getElementById("yellow-box");

// listLink.addEventListener("click", function() {
//     leftView.classList.add("visible");
//     leftView.classList.remove("hidden");
//     rightView.classList.remove("hidden");
//     rightView.classList.add("visible");
//     addMusic.classList.add("hidden");
//     addMusic.classList.remove("visible");
// });



