function initMap() {
    var pos = {lat: 56.955449, lng: 24.099333};
    var opt = {
        center: pos,
        zoom: 15,
    };
  
    var myMap = new google.maps.Map(document.getElementById("map"),
    opt);
  
    var marker = new google.maps.Marker({
        position: pos,
        map: myMap,
    });
  }