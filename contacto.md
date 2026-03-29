---
layout: page
title: Contacto
permalink: /contacto/
lead: "Consultoria, proyectos a medida, capacitaciones o colaboraciones tecnicas."
title_i18n: pageContactTitle
lead_i18n: pageContactLead
---

<div class="row g-4">
  <div class="col-md-7">
    <h2 class="h4" data-i18n="contactHowTitle">Como trabajo</h2>
    <ul>
      <li data-i18n="contactStep1">Relevamiento tecnico del problema.</li>
      <li data-i18n="contactStep2">Propuesta con alcance, tiempos y entregables.</li>
      <li data-i18n="contactStep3">Desarrollo y validacion en etapas.</li>
      <li data-i18n="contactStep4">Documentacion y soporte de puesta en marcha.</li>
    </ul>
  </div>
  <div class="col-md-5">
    <div class="tile">
      <h2 class="h5" data-i18n="contactChannelsTitle">Canales</h2>
      <p class="mb-2"><strong data-i18n="contactNameLabel">Nombre:</strong> Facundo Olmedo</p>
      <p class="mb-2"><strong data-i18n="contactEmailLabel">Email:</strong> <a href="mailto:{{ site.contact.email }}">{{ site.contact.email }}</a></p>
      <p class="mb-2"><strong data-i18n="contactLocationLabel">Ubicacion:</strong> {{ site.contact.city }}, {{ site.contact.country }}</p>
      <div class="d-flex flex-wrap gap-2 mt-3">
        <a class="btn btn-brand" href="mailto:{{ site.contact.email }}" data-i18n="contactSendEmail">Enviar email</a>
        <a class="btn btn-outline-brand" href="{{ site.contact.whatsapp_url }}" target="_blank" rel="noopener" data-i18n="contactWhatsapp">WhatsApp</a>
      </div>
    </div>
  </div>
</div>
