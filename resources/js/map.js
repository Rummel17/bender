
      function initMap() {
        // The location of Uluru
        var ingbert = {lat: 49.285647, lng: 7.150917};
        // The map, centered at St.Ingbert
        var map = new google.maps.Map(document.getElementById('map'), {
          center: ingbert,
          zoom: 15,
        });

        var infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);


        service.getDetails({
          //place Id to identify the address, look up added to book mark
          placeId: 'ChIJ9SckLMl9C0ERz6Ja2-mKd44'
        }, function(place, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            // The marker, positioned at St.Ingbert

            var marker = new google.maps.Marker({
              map: map,
              position: ingbert,

            });
            google.maps.event.addListener(marker, 'click', function() {
              infowindow.setContent('<div class="address"><strong>' + place.name + //'</strong><br>' +
                //'Place ID: ' + place.place_id +
                '</br>' +
                place.adr_address + '</br>' + place.international_phone_number +'</div>');
              infowindow.open(map, this);
            });
          }
        });
      }
