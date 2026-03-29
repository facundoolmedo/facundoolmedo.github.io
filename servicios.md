---
layout: page
title: Servicios
permalink: /servicios/
lead: "Servicios profesionales para empresas, talleres y equipos de desarrollo."
title_i18n: pageServicesTitle
lead_i18n: pageServicesLead
---

<div class="row g-3">
  {% for item in site.services %}
  <div class="col-md-6">
    <article class="listing-card p-4 h-100">
      <h2 class="h4 mb-2"><a class="text-decoration-none" href="{{ item.url | relative_url }}">{{ item.title }}</a></h2>
      <p class="mb-2 text-light">{{ item.excerpt }}</p>
      {% if item.price %}<p class="mb-1"><strong data-i18n="servicesInvestmentLabel">Inversion:</strong> {{ item.price }}</p>{% endif %}
      {% if item.format %}<p class="mb-0"><strong data-i18n="servicesFormatLabel">Modalidad:</strong> {{ item.format }}</p>{% endif %}
    </article>
  </div>
  {% endfor %}
</div>
