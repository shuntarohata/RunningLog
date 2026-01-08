document.addEventListener("DOMContentLoaded", function () {
  var mymap = L.map("mapid").setView([0, 165], 1);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a>',
    maxZoom: 18,
  }).addTo(mymap);

  fetch(window.GEOJSON_URL)
    .then((response) => response.json())
    .then((data) => {
      L.geoJSON(data, {
        pointToLayer: function (feature, latlng) {
          return L.circleMarker(latlng, {
            color: "magenta",
            fillColor: "magenta",
            fillOpacity: 0.8,
            radius: 3,
          });
        },
        onEachFeature: function (feature, layer) {
          if (feature.properties && feature.properties.name) {
            layer.bindPopup(feature.properties.name);
          }
        },
      }).addTo(mymap);
    })
    .catch((err) =>
      console.error("GeoJSON読み込みエラー:", err)
    );
});
