class Player {
  constructor () {
    this.currentlyPlaying = album.songs[0];
    this.playState = 'stopped';
    this.volume = 80;
    this.soundObject = new buzz.sound(this.currentlyPlaying.soundFileUrl);
  }

  getDuration() {
    return this.soundObject.getDuration();
  }

  getTime() {
    return this.soundObject.getTime();
  }

  playPause (song = this.currentlyPlaying) {
    if (this.currentlyPlaying !== song) {
      // Stops the `soundObject` property. Stop the currently playing sound file (even if nothing is playing)
      this.soundObject.stop();
      // Removes the `"playing"` and `"paused"` classes from the `element` property of `this.currentlyPlaying`. / Clear classes on the song that's currently playing
      this.currentlyPlaying.element.removeClass('playing paused');

      //Sets `this.currentlyPlaying` to the function's parameter, `song`. / Update our currentlyPlaying and playState properties
      this.currentlyPlaying = song;
      //Changes the `playState` property to `"stopped"`.
      this.playState = 'stopped';
      //Instantiates a new sound object using `this.currentlyPlaying`, which was just updated to `song`.
      this.soundObject = new buzz.sound(this.currentlyPlaying.soundFileUrl);
    }
    if (this.playState === 'paused' || this.playState === 'stopped') {
      this.soundObject.setVolume( this.volume );
      this.soundObject.play();
      this.playState = 'playing';
      this.currentlyPlaying.element.removeClass('paused').addClass('playing');
    } else {
      this.soundObject.pause();
      this.playState = 'paused';
      this.currentlyPlaying.element.removeClass('playing').addClass('paused');
    }
  }

  skipTo (percent) {
    if (this.playState !== 'playing') { return }
    this.soundObject.setTime( (percent / 100) * this.soundObject.getDuration() );
  }

  setVolume (percent) {
    this.volume = percent;
    this.soundObject.setVolume(percent);
  }
}

const player = new Player();
