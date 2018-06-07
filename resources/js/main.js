// Initialize and add the map
function initMap() {
  // The location of Uluru
  var ingbert = {lat: 49.285685, lng: 7.150964};
  // The map, centered at St.Ingbert
  var map = new google.maps.Map(
      document.getElementById('map'), {
        zoom: 12,
        center: ingbert,
        zoomControl: true,
        mapTypeControl: true,
            });
  // The marker, positioned at St.Ingbert
  var marker = new google.maps.Marker({position: ingbert, map: map});
};
