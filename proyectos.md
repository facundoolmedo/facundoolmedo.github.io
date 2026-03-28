---
layout: page
title: Proyectos
permalink: /proyectos/
lead: "Automatizacion industrial, diseño de hardware y sistemas embebidos aplicados a produccion."
---

<div class="row g-3">
  {% assign items = site.projects | sort: 'title' %}
  {% for item in items %}
  <div class="col-md-6">
    <article class="listing-card p-4 h-100">
      <h2 class="h4 mb-2"><a class="text-decoration-none" href="{{ item.url | relative_url }}">{{ item.title }}</a></h2>
      <p class="text-light mb-3">{{ item.excerpt }}</p>
      {% if item.technologies %}
      <div class="d-flex flex-wrap gap-2">
        {% for tech in item.technologies %}
        <span class="badge rounded-pill badge-tech">{{ tech }}</span>
        {% endfor %}
      </div>
      {% endif %}
    </article>
  </div>
  {% endfor %}
</div>
