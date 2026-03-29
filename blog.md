---
layout: page
title: Blog
permalink: /blog/
lead: "Publicaciones tecnicas sobre automatizacion, electronica y desarrollo de productos."
title_i18n: pageBlogTitle
lead_i18n: pageBlogLead
---

<div class="row g-3">
  {% for post in site.posts %}
  <div class="col-md-6">
    <article class="listing-card p-4 h-100">
      <p class="eyebrow mb-2">{{ post.date | date: '%d/%m/%Y' }}</p>
      <h2 class="h4 mb-2"><a class="text-decoration-none" href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      <p class="mb-0 text-light">{{ post.excerpt | strip_html | truncate: 140 }}</p>
    </article>
  </div>
  {% endfor %}
</div>
