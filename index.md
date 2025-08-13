---
layout: default
title: Home
---

# Projects

<div class="grid-4">
{% for project in site.pages %}
  {% if project.path contains 'projects/' %}
  <div class="card">
    <a href="{{ project.url }}">
      <h3>{{ project.title }}</h3>
      <p>{{ project.excerpt | default: "Click to read more" }}</p>
    </a>
  </div>
  {% endif %}
{% endfor %}
</div>
