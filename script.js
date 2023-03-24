window.initMap = initMap;
function iniciarMap(){
    var coord = {lat:-35.115229 ,lng: -65.258761};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
