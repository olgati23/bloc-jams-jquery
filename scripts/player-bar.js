//Next Button
{
//Write a click handler that targets the #play-pause button and calls helper.playPauseAndUpdate().
  $('button#play-pause').on('click', function() {
    helper.playPauseAndUpdate();

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
helper.playPauseAndUpdate() and pass it nextSong*/
    const nextSongIndex = currentSongIndex + 1;

/*Fix that with an if statement that checks whether the value of nextSongIndex is greater
than or equal to the length of album.songs, and if it is, execute a return statement.*/
    if (nextSongIndex >= album.songs.length) { return; }

    const nextSong = album.songs[nextSongIndex];
    helper.playPauseAndUpdate(nextSong);
  });

//Changing songs playback position
$('#volume-control input').on('input', function (event){
  player.setVolume(event.target.value);
});

$('#time-control input').on('input', function (event) {
  player.skipTo(event.target.value);
});

  setInterval( () => {
    if (player.playState !== 'playing') {return;}
    const currentTime = player.getTime();
    const duration = player.getDuration();
    const percent = (currentTime / duration) * 100;
<<<<<<< HEAD
    $('#time-control .current-time').text( currentTime );
=======
    $('#time-control .current-time').text(currentTime);
>>>>>>> checkpoint-12.18-assignment
    $('#time-control input').val(percent);
    $('#time-control .total-time').text(duration);
  }, 1000);
}

//Previous Button
{
  $('button#previous').on('click', function () {
    if (player.playState !== 'playing') {return;}

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const previousSongIndex = currentSongIndex - 1;
    if (previousSongIndex < 0) { return; }

    const previousSong = album.songs[previousSongIndex];
    helper.playPauseAndUpdate(previousSong);
  });
}
