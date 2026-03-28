---
layout: page
title: Contacto
permalink: /contacto/
lead: "Consultoria, proyectos a medida, capacitaciones o colaboraciones tecnicas."
---

<div class="row g-4">
  <div class="col-md-7">
    <h2 class="h4">Como trabajo</h2>
    <ul>
      <li>Relevamiento tecnico del problema.</li>
      <li>Propuesta con alcance, tiempos y entregables.</li>
      <li>Desarrollo y validacion en etapas.</li>
      <li>Documentacion y soporte de puesta en marcha.</li>
    </ul>
  </div>
  <div class="col-md-5">
    <div class="tile">
      <h2 class="h5">Canales</h2>
      <p class="mb-2"><strong>Nombre:</strong> Facundo Olmedo</p>
      <p class="mb-2"><strong>Email:</strong> <a href="mailto:{{ site.contact.email }}">{{ site.contact.email }}</a></p>
      <p class="mb-2"><strong>Ubicacion:</strong> {{ site.contact.city }}, {{ site.contact.country }}</p>
      <div class="d-flex flex-wrap gap-2 mt-3">
        <a class="btn btn-brand" href="mailto:{{ site.contact.email }}">Enviar email</a>
        <a class="btn btn-outline-brand" href="{{ site.contact.whatsapp_url }}" target="_blank" rel="noopener">WhatsApp</a>
      </div>
    </div>
  </div>
</div>
