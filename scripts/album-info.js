{
  /*Insert the album title into the #albut-title element*/
  $('#album-title').text(album.title);
  $('img#album-cover-art').attr('src', album.albumArtUrl);
}
