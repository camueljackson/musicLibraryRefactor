var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  printPlaylists: function() {
    var liblist = this.playlists;
    for (var eachPlaylist in liblist) {
      console.log(liblist[eachPlaylist].id + ": " + liblist[eachPlaylist].name + " - " + liblist[eachPlaylist].tracks.length + " tracks");
    }
  },
  printTracks: function() {
    var libTracks = this.tracks;
    for (var eachTrack in libTracks) {
      console.log(libTracks[eachTrack].id + ": " + libTracks[eachTrack].name + " by " + libTracks[eachTrack].artist + " (" + libTracks[eachTrack].album + ")" );
    }
  },
  printPlaylist: function(playlistId) {
   var playList = library.playlists[playlistId];
    console.log(playlistId + ": " + library.playlists[playlistId].name + " - " + library.playlists[playlistId].tracks.length + " tracks")
      var tracks = library.playlists[playlistId].tracks;
      for (var key in tracks) {
          console.log( library.tracks[tracks[key]].id +": " + library.tracks[tracks[key]].name + " by " + library.tracks[tracks[key]].artist + " (" + library.tracks[tracks[key]].album + ")")
      }
  },
  addTrackToPlaylist: function(trackId, playlistId) {
    this.playlists[playlistId].tracks.push(trackId);
    console.log(library.playlists.p01.tracks);{
      uid: function() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
}


library.printPlaylists();
library.printTracks();
library.printPlaylist("p01");
library.addTrackToPlaylist(uid, "p01");


var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

// adds a track to the library

var addTrack = function (name, artist, album) {
  var newId = uid();
  var tracks = library.tracks;
  tracks[newId] = {id: newId, name: name, artist: artist, album: album}

}

// adds a playlist to the library

var addPlaylist = function (name) {

  var newlistId = uid();

  var list = library.playlists;
  list[newlistId] = {id: newlistId, name: name}

}



}