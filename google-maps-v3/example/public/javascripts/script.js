(function () {

    var map,
      markers = [],
      circles = [];

    function initialMap() {
        var pos = new google.maps.LatLng(25.0392179,121.5398562);

        google.maps.visualRefresh = true;

        var mapOptions = {
            zoom: 15,
            disableDefaultUI: true,
            center: pos,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);

        var input = (document.getElementById('pac-input'));
        // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        var searchBox = new google.maps.places.SearchBox((input));

        google.maps.event.addListener(searchBox, 'places_changed', function() {


            var places = searchBox.getPlaces();

            // For each place, get the icon, place name, and location.

            var bounds = new google.maps.LatLngBounds();

            map.setCenter(places[0].geometry.location);

            // Create a marker for each place.
            var marker = new google.maps.Marker({
                map: map,
                title: places[0].name,
                position: places[0].geometry.location,
                animation: google.maps.Animation.DROP
            });

        });

    }

    initialMap();
})();