
    var allSongs = [];
    var moreSongs = [];

function getSongInfo (callback) {
  var xhr = new XMLHttpRequest()
  xhr.open('GET', 'allSongs.json')
  xhr.addEventListener("load", function(evt) {
  allSongs = JSON.parse(this.responseText);

  callback(allSongs)
     })
  xhr.send()
}
getSongInfo(showSongs);

function getMoreSongInfo (callback) {
        var xhr = new XMLHttpRequest()
        xhr.open('GET', 'moreSongs.json')
        xhr.addEventListener("load", function(evt) {
        moreSongs = JSON.parse(this.responseText);

        callback(moreSongs)
         })
        xhr.send()
    }
    getMoreSongInfo(showMoreSongs);

function showSongs (allSongs) {
  var output = "";
  var output = document.getElementById("yellow-box");
  var allSongsString = "";
// Looping though all array of songs

  for (var i = 0; i < allSongs.songs.length; i++) {
     var each = allSongs.songs[i];
      // alert(allSongs.songs[i]);
     var songName = each.title;
     var artistName = each.artist;
     var albumName = each.album;
    allSongsString +=
     `<div class="song">
        <h2 class="name">${songName}</h2>
        <ul>
          <li class="artist">${artistName}</li>
          <li>|</li>
          <li class="album">${albumName}</li>
          <li>|</li>
          <li class="genre">Genre</li>
        </ul>
        <span><button type="button" class="deleteButtoN" name="delete">Delete</button></span>
      </div>`;
  }
   output.innerHTML = allSongsString;

   var deleteButtons = document.getElementsByClassName("deleteButtoN");
   for (var j = 0; j < deleteButtons.length; j++) {
   deleteButtons[j].addEventListener("click", function (evt) {
    console.log("delete button clicked")
     evt.target.parentElement.parentElement.remove();
  });
   }

}

function showMoreSongs (moreSongs) {
    // var output1 = "";
    var output1 = document.getElementById("more-box");
    var moreButton = document.getElementById("moreButton");
    var moreSongsString = "";

  // Looping though all array of songs
  moreButton.addEventListener("click", function (evt){
    console.log("more button clicked")
    for (var j = 0; j < moreSongs.songs.length; j++) {
       var each = moreSongs.songs[j];
       var songName = each.title;
       var artistName = each.artist;
       var albumName = each.album;
      moreSongsString +=
      `<div class="song">
        <h2 class="name">${songName}</h2>
        <ul>
          <li class="artist">${artistName}</li>
          <li>|</li>
          <li class="album">${albumName}</li>
          <li>|</li>
          <li class="genre">Genre</li>
        </ul>
        <span><button type="button" class="deleteButtoN" name="delete">Delete</button></span>
      </div>`;
  }
   output1.innerHTML = moreSongsString;

   var deleteButtons = document.getElementsByClassName("deleteButtoN");
   for (var j = 0; j < deleteButtons.length; j++) {
   deleteButtons[j].addEventListener("click", function (evt) {
    console.log("delete button clicked")
     evt.target.parentElement.parentElement.remove();
  });
   }
 });
}

