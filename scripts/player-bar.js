//Next Button
{
//Write a click handler that targets the #play-pause button and calls player.playPause().
  $('button#play-pause').on('click', function() {
    player.playPause();

/*Setting the playState attribute on our play/pause button will cause the icons
to show/hide appropriately. We can use the jQuery .attr() method to set the
attribute, and we can set it to the player object's playState property. */
    $(this).attr('playState', player.playState);
  });

//adding a new click handler to the #next button
  $('button#next').on('click', function () {

/*player.playState to check if a song is playing, and if not,
execute a return statement. The return will terminate execution
of the function if the if statement's condition is met.*/
    if (player.playState !== 'playing') {return;}

/*.indexOf() to get the index of player.currentlyPlaying in album.songs,
and assign it to a variable, songIndex*/
    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);

/*Create variable for the next song's index and call it nextSongIndex. Use nextSongIndex
to get the next song in album.songs and assign that to a nextSong variable. Finally, call
player.playPause() and pass it nextSong*/
    const nextSongIndex = currentSongIndex + 1;

/*Fix that with an if statement that checks whether the value of nextSongIndex is greater
than or equal to the length of album.songs, and if it is, execute a return statement.*/
    if (nextSongIndex >= album.songs.length) { return; }

    const nextSong = album.songs[nextSongIndex];
    player.playPause(nextSong);
  });
}

//Previous Button
{
  $('button#previous').on('click', function () {
    if (player.playState !== 'playing') {return;}

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const previousSongIndex = currentSongIndex - 1;
    if (previousSongIndex < 0) { return; }

    const previousSong = album.songs[previousSongIndex];
    player.playPause(previousSong);
  });
}
