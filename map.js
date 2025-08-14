// 日本を中心に表示（Web Mercator投影）
  //地図の中心地を定義
  //var mymap = L.map('mapid').setView([37.85, 138.8], 9);
  var mymap = L.map('mapid').setView([35, 140], 2);
  //タイルレイヤーを取得
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a>',
    maxZoom: 18}).addTo(mymap);