var buildCollectionItemTemplate = function() {
    var template =


    '<div class="collection-album-container column fourth">'
  + '   <img src="assets/images/album_covers/jazz.png"/>'
  + '   <div class="collection-album-info caption">'
  + '     <p>'
  + '       <a class="album-name" href="album.html"> Non Copyrighted Music </a>'
  + '       <br/>'
  + '       <a href="album.html"> Jazz Album </a>'
  + '       <br/>'
  + '       5 track'
  + '       <br/>'
  + '     </p>'
  + '   </div>'
  + '</div>'

    var template2 =

    '<div class="collection-album-container column fourth">'
  + '   <img src="assets/images/album_covers/house.jpg"/>'
  + '   <div class="collection-album-info caption">'
  + '     <p>'
  + '       <a class="album-name" href="albumtwo.html"> Youtube NCS </a>'
  + '       <br/>'
  + '       <a href="albumtwo.html"> Amine Chadigan </a>'
  + '       <br/>'
  + '       3 songs'
  + '       <br/>'
  + '     </p>'
  + '   </div>'
  + '</div>'
  ;

    //return $(template);
    return [template,template2];
};

$(window).load(function() {
    var $collectionContainer = $('.album-covers');
    $collectionContainer.empty();
   // for (var i = 0; i < 8; i++) {
        var $newThumbnail = buildCollectionItemTemplate();
        $collectionContainer.append($newThumbnail);
    //}
});
