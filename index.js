const apiKey='AIzaSyDI17XgbW9RavtHAz_Jq21KasFOsII7myI'
function initMap() {
    // Stwórz nową mapę Google w elemencie o id "map"
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644}, // Ustaw początkowe współrzędne
        zoom: 8 // Ustaw poziom przybliżenia
    });
}