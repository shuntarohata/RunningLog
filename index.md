---
layout: single
title: "Running Log"
---

<!-- 世界地図 -->
<div id="mapid" class="full-width-map"></div>

<!-- 最新記事カード -->
<h2 class="mb-4">最新記事</h2>
<div class="row row-cols-1 row-cols-md-2 g-4">
  {% for post in site.posts %}
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
