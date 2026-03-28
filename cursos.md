---
layout: page
title: Cursos
permalink: /cursos/
lead: "Formacion tecnica para equipos y profesionales que quieran acelerar resultados."
---

<div class="row g-3">
  {% for item in site.courses %}
  <div class="col-md-6">
    <article class="listing-card p-4 h-100">
      <h2 class="h4 mb-2"><a class="text-decoration-none" href="{{ item.url | relative_url }}">{{ item.title }}</a></h2>
      <p class="mb-2 text-light">{{ item.excerpt }}</p>
      {% if item.level %}<p class="mb-1"><strong>Nivel:</strong> {{ item.level }}</p>{% endif %}
      {% if item.duration %}<p class="mb-0"><strong>Duracion:</strong> {{ item.duration }}</p>{% endif %}
    </article>
  </div>
  {% endfor %}
</div>
