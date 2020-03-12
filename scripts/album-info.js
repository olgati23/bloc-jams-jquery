{
  /*Insert the album title into the #albut-title element*/
  $('#album-title').text(album.title);
  /* use .attr() method to add album.albumArtUrl to the src attribute of the img#album-cover-art element:*/
  $('img#album-cover-art').attr('src', album.albumArtUrl);
  /* mapping the artist */
  $('.artist').text(album.artist);
  /* mapping the release data */
   $('#release-info').text(album.releaseInfo);
}
