class Helper {

  playPauseAndUpdate(song) {
    player.playPause(song);

    const duration = player.getDuration();
    $('#time-duration .total-time').text(duration);
  }
}

const helper = new Helper ();
