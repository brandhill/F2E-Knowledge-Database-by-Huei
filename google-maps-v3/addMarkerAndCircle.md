
var map,
    markers = [],
    circles = [];

function addMarkerAndCircle() {

var pos = new google.maps.LatLng(25.0392179,121.5398562),
    imageUrl = 'xxx.png',
    color = '#fff',
    radius = '1';

var content = '<a href="" data-toggle="modal">Content</a>';

var infowindow = new google.maps.InfoWindow({
    content: content
});

var icon = {
    url: imageUrl,
    // This marker is 20 pixels wide by 32 pixels tall.
    size: new google.maps.Size(50, 50),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(25, 30)
};

var marker = new google.maps.Marker({
    map: map,
    draggable: false,
    animation: google.maps.Animation.DROP,
    position: pos,
    icon: icon
});

markers.push(marker);


google.maps.event.addListener(marker, 'click', function () {
    var mapTo = marker.getMap();
    map.setCenter(marker.getPosition());
    infowindow.open(map, marker);
});

// circle
var cicleOption = {
    strokeColor: 'white',
    strokeOpacity: 0.3,
    strokeWeight: 3,
    fillColor: color || '#ddd',
    fillOpacity: 0.35,
    map: map,
center: pos,
radius: radius || 0
};
// Add the circle for this city to the map.
var cityCircle = new google.maps.Circle(cicleOption);

cityCircles.push(cityCircle);

// add data to scope
$scope.dataSelected.push(obj);
}