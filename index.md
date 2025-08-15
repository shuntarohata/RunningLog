---
layout: home
title: "出先で走る"
author_profile: true
---

{% raw %}
<!-- タイトルボックス -->
<div class="title-box text-center mb-4">
  <h1>出先で走る</h1>
  <p class="text-muted">出先で走る、モチベアップのためのページ</p>
</div>

<!-- 世界地図 -->
<div id="mapid" style="height: 500px; max-width: 600px; margin: auto;"></div>

<!-- カード風の記事一覧 -->
<div class="content-box mt-5">
  <h2 class="mb-4">最新記事</h2>
  <div class="row row-cols-1 row-cols-md-2 g-4">
    {% for post in site.posts limit:4 %}
    <div class="col">
      <div class="card h-100 text-center">
        <img src="https://placehold.co/400x200" class="card-img-top" alt="記事画像">
        <div class="card-body">
          <h5 class="card-title">{{ post.title }}</h5>
          <p class="card-text">{{ post.excerpt | strip_html | truncate: 100 }}</p>
          <a href="{{ post.url | relative_url }}" class="btn btn-primary">続きを読む</a>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
</div>

<!-- Leaflet CSS/JS -->
<link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css"/>
<script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>

<!-- 外部JS -->
<script src="{{ '/assets/js/map.js' | relative_url }}"></script>
{% endraw %}
