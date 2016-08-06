
// var play = (function () {
    var allSongs = [];
    // var songs = [];
    // var songTitleArray = [];
    // var songArtistArray = [];
    // var songAlbumArray = [];
    // var songString = "";
    // var list = "";

    // return {
         function getSongInfo (callback) {
            var xhr = new XMLHttpRequest()
            xhr.open('GET', 'allSongs.json')
            xhr.addEventListener("load", function(evt) {
            allSongs = JSON.parse(this.responseText);
          // alert(allSongs.songs[1].album);

            callback(allSongs)
             })
            xhr.send()
        }
    // }
// })()
    getSongInfo(showSongs);

// var play = (function () {
    function showSongs (allSongs) {
      // var allSongs = {};(my bad i override this)
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
            <li><button type="button" id="deleteButton" name = "delete">Delete</button></li>
            </ul>
          </div>`;
      }
      // console.log("hi")

       var deleteButtons = document.getElementById("yellow-box");
      // var deleteButtons = document.querySelector(".song");
        for (var i = 0; i < 1; i++) {
      deleteButtons.addEventListener("click", function (evt) {
        // console.log("you clicked me");
         evt.target.parentElement.remove();
      } );
        }

      output.innerHTML = allSongsString;
    }






