---
layout: page
title: Tienda
permalink: /tienda/
lead: "Packs tecnicos y servicios listos para contratar por WhatsApp o email."
---

<div class="row g-3 mb-4">
  {% for item in site.products %}
  <div class="col-md-6">
    <article class="listing-card p-4 h-100">
      <h2 class="h4 mb-2"><a class="text-decoration-none" href="{{ item.url | relative_url }}">{{ item.title }}</a></h2>
      <p class="mb-2 text-light">{{ item.excerpt }}</p>
      {% if item.price %}<p class="mb-1"><strong>Precio:</strong> {{ item.price }}</p>{% endif %}
      {% if item.delivery %}<p class="mb-3"><strong>Entrega:</strong> {{ item.delivery }}</p>{% endif %}
      <div class="d-flex flex-wrap gap-2">
        <a class="btn btn-brand" href="{{ site.contact.whatsapp_url }}" target="_blank" rel="noopener">Comprar por WhatsApp</a>
        <a class="btn btn-outline-brand" href="mailto:{{ site.contact.email }}?subject={{ item.cta_email_subject | default: 'Consulta de producto' | uri_escape }}">Comprar por email</a>
      </div>
    </article>
  </div>
  {% endfor %}
</div>

<div class="content-card p-4 p-md-5">
  <p class="eyebrow mb-2">Nota</p>
  <p class="mb-0">Si queres un pack personalizado, escribime y armamos una propuesta a medida para tu empresa o proyecto.</p>
</div>
