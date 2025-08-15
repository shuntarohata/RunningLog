document.addEventListener("DOMContentLoaded", function() {
  // ここで以前指定していた座標をそのまま使用
  var mymap = L.map('mapid').setView([0, 165], 1); 

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a>',
    maxZoom: 18
  }).addTo(mymap);

  // GeoJSONの読み込み（GitHub Pages上ではルートからの相対パスに注意）
  fetch('files/ya_cities.geojson')  // ./ は不要
    .then(response => response.json())
    .then(data => {
      L.geoJSON(data, {
        pointToLayer: function(feature, latlng) {
          return L.circleMarker(latlng, {
            color: 'magenta',
            fillColor: 'magenta',
            fillOpacity: 0.8,
            radius: 1
          });
        },
        onEachFeature: function(feature, layer) {
          if (feature.properties && feature.properties.name) {
            layer.bindPopup(feature.properties.name);
          }
        }
      }).addTo(mymap);
    })
    .catch(err => console.error("GeoJSON読み込みエラー:", err));
});
