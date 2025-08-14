<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function () {
  // 日本を中心に表示（Web Mercator投影）
  var mymap = L.map('mapid').setView([0, 165], 1);
=======
document.addEventListener("DOMContentLoaded", function() {
  // 地図の初期化
  var mymap = L.map('mapid').setView([0, 165], 1); // 日本中心
>>>>>>> parent of e2ed4f4 (small change)

  // タイルレイヤーを取得
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a>',
    maxZoom: 18
  }).addTo(mymap);

  // GeoJSON を読み込む
  fetch("{{ '/files/ya_cities.geojson' | relative_url }}")
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      L.geoJSON(data, {
        pointToLayer: function(feature, latlng) {
          return L.circleMarker(latlng, {
            color: 'magenta',
            fillColor: 'magenta',
            fillOpacity: 0.8,
            radius: 8
          });
        },
        onEachFeature: function(feature, layer) {
          if (feature.properties && feature.properties.name) {
            layer.bindPopup(feature.properties.name);
          }
        }
      }).addTo(mymap);
    })
    .catch(err => {
      console.error("GeoJSON の読み込みに失敗しました:", err);
    });
});
