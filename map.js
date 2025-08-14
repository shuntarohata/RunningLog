// 日本を中心に表示（Web Mercator投影）
var map = L.map('map').setView([35, 140], 2);

// OpenStreetMapタイルを読み込み
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
