// モルワイデ投影の定義（日本中心）
var crs = new L.Proj.CRS(
  'ESRI:54009',
  '+proj=moll +lon_0=140 +datum=WGS84 +units=m +no_defs',
  {
    resolutions: [5000000, 2500000, 1250000, 625000, 312500, 156250, 78125],
    origin: [0, 0]
  }
);

// 地図作成
var map = L.map('map', {
  crs: crs,
  center: [20, 140], // 日本中心
  zoom: 1
});

// タイルレイヤ（モルワイデ対応）
L.tileLayer.wms('https://ahocevar.com/geoserver/wms', {
  layers: 'ne:NE1_HR_LC_SR_W_DR',
  format: 'image/png',
  transparent: false,
  attribution: 'Tiles courtesy of Natural Earth'
}).addTo(map);
