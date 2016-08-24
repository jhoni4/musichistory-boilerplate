(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var songs = require('./xhr');
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
var rightView = document.getElementById("container3");

  addLink.addEventListener("click", function() {
    leftView.classList.remove("visible");
    leftView.classList.add("hidden");
    rightView.classList.remove("visible");
    rightView.classList.add("hidden");
    addMusic.classList.remove("hidden");
    addMusic.classList.add("visible");
});




},{"./xhr":2}],2:[function(require,module,exports){
"use strict";

var songLists = require('./songs.js');

    var allSongs = [];
    var moreSongs = [];

$(function () {


  $.getJSON('allSongs.json' )
    .then((data1) => {
      allSongs = data1;
      // console.log('data1', data1.songs)
      showSongs(data1);

      $.get('moreSongs.json')
      .then((data2) => {
        moreSongs = data2;
        // console.log('data2', moreSongs.songs[0].title)
        $("#moreButton").click(function(e) {
          showSongs(data2);

        });
      });
    });

  // var getMoreSongInfo = $.when($.get('moreSongs.json'))
  //   .then((data2) => {
  //     moreSongs = data2;
  //     // console.log('data2', moreSongs.songs[0].title)

  //     showMoreSongs(data2);

  //   })


  function showSongs (allSongs) {
    var allSongsString = "";

  // Looping though all array of songs

    for (var i = 0; i < allSongs.songs.length; i++) {
       var each = allSongs.songs[i];
        // alert(allSongs.songs[i]);
       var songName = each.title;
       var artistName = each.artist;
       var albumName = each.album;
       var Genre = each.genre;
      allSongsString +=
       `<div class="song">
          <h2 class="name">${songName}</h2>
          <ul>
            <li class="artist">${artistName}</li>
            <li>|</li>
            <li class="album">${albumName}</li>
            <li>|</li>
            <li class="genre">${Genre}</li>
          </ul>
          <span><button type="button" class="deleteButtoN" name="delete">Delete</button></span>
        </div>`;
    }
     $("#yellow-box").append(allSongsString);


     $(".deleteButtoN").click(function (evt) {
      // console.log("delete button clicked")
       this.parentElement.parentElement.remove();
    });

  }

});
  // function showMoreSongs (moreSongs) {
  //     var moreSongsString = "";

  //   // Looping though all array of songs
  //   $("#moreButton").click(function(e) {
  //       moreSongsString = "";
  //       // console.log("more button clicked")
  //       for (var j = 0; j < moreSongs.songs.length; j++) {
  //          var each = moreSongs.songs[j];
  //          var songName = each.title;
  //          var artistName = each.artist;
  //          var albumName = each.album;
  //          var Genre = each.genre;
  //         moreSongsString +=
  //         `<div class="song">
  //           <h2 class="name">${songName}</h2>
  //           <ul>
  //             <li class="artist">${artistName}</li>
  //             <li>|</li>
  //             <li class="album">${albumName}</li>
  //             <li>|</li>
  //             <li class="genre">${Genre}</li>
  //           </ul>
  //           <span><button type="button" class="deleteButton2" name="delete">Delete</button></span>
  //         </div>`;
  //     }
  //      $("#more-box").append(moreSongsString);

  //      $(".deleteButton2").click(function (evt) {
  //       // console.log("delete button clicked")
  //        this.parentElement.parentElement.remove();
  //     });

  //      // $("#moreButton").remove();
  //    });
  // }

},{"./songs.js":1}]},{},[2,1]);
