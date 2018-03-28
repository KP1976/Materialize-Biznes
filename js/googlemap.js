function initMap() {
  const position = [52.229676, 21.012229]; // WARSZAWA
  const centerPosition = [52.219676, 20.899999];

  google.maps.event.addDomListener(window, "load", _ => {
    // POZYCJE NA MAPIE
    const latLng = new google.maps.LatLng(position[0], position[1]);
    const centerLatLng = new google.maps.LatLng(
      centerPosition[0],
      centerPosition[1]
    );

    // OPCJE MAPY
    const mapOptions = {
      zoom: 10,
      streetViewControl: false,
      scaleControl: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      center: centerLatLng
    };

    // UTWORZENIE MAPY
    map = new google.maps.Map(document.getElementById("googlemap"), mapOptions);

    // POKAŻ MARKER
    marker = new google.maps.Marker({
      position: latLng,
      map: map,
      draggable: false,
      animation: google.maps.Animation.DROP
    });
  });
}
