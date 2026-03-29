# Sitio personal en Jekyll + Bootstrap

Sitio modular para mostrar experiencia, proyectos, estudios, cursos, servicios y blog.
Compatible con GitHub Pages.

## Requisitos

- Ruby instalado
- Bundler (`gem install bundler`)

## Ejecutar en local

```bash
bundle install
bundle exec jekyll serve
```

Abrir `http://localhost:4000`.

## Ejecutar con Docker

### Requisitos

- Docker Desktop instalado

### Levantar entorno

```bash
docker compose up --build
```

Abrir `http://localhost:4000`.

### Detener entorno

```bash
docker compose down
```

### Limpiar volumen de gems (opcional)

```bash
docker compose down -v
```

## Estructura clave

- `_config.yml`: configuracion global
- `_layouts/`: plantillas
- `_includes/`: componentes reutilizables (navbar/footer)
- `_projects/`: proyectos tecnicos
- `_services/`: servicios a ofrecer
- `_courses/`: cursos disponibles
- `_products/`: productos/packs de la tienda
- `_posts/`: articulos del blog
- `plantillas/`: templates para crear contenido rapido
- `assets/css/custom.css`: estilo visual principal

## Como agregar contenido

### Nuevo post de blog

Crear archivo en `_posts/` con formato:

`AAAA-MM-DD-titulo.md`

### Nuevo proyecto

Crear archivo Markdown en `_projects/` con front matter:

```yaml
---
title: "Nombre del proyecto"
excerpt: "Resumen corto"
technologies:
  - PLC
  - STM32
---
```

### Nuevo servicio

Crear archivo en `_services/` con:

```yaml
---
title: "Nombre del servicio"
price: "Desde USD 500"
format: "Remoto / Presencial"
---
```

### Nuevo curso

Crear archivo en `_courses/` con:

```yaml
---
title: "Nombre del curso"
level: "Inicial / Intermedio / Avanzado"
duration: "8 semanas"
---
```

### Nuevo producto de tienda

Crear archivo en `_products/` con:

```yaml
---
title: "Nombre del pack"
excerpt: "Que incluye y para quien es"
price: "USD 120"
delivery: "PDF + videollamada"
cta_email_subject: "Consulta pack"
---
```

### Plantilla de post tecnico tipo paso a paso

Usar `plantillas/plantilla-post-proyecto-tecnico.md` como base para nuevos articulos.

### Plantilla de producto/pack para tienda

Usar `plantillas/plantilla-producto-tienda.md` para publicar nuevos packs en `_products/`.

## Publicar en GitHub Pages

1. Crear repositorio nuevo y subir este proyecto.
2. En GitHub, ir a **Settings > Pages**.
3. En **Build and deployment**, seleccionar **Deploy from a branch**.
4. Elegir la rama `main` y carpeta `/ (root)`.
5. Guardar.

GitHub Pages compila Jekyll automaticamente.

## Personalizacion rapida

### Cambiar navbar

Editar `_includes/navbar.html`.

### Cambiar footer

Editar `_includes/footer.html`.

### Cambiar foto de perfil en home

1. Reemplazar `assets/images/profile-placeholder.svg` por tu imagen (por ejemplo `profile.jpg`).
2. Actualizar el `src` de la imagen en `index.md`.

### Mapa mundial (SVG externo)

- Archivo actual: `assets/images/world-support-map.svg`
- Datos/licencia: `assets/images/world-support-map-license.txt`

### Idioma EN/ES

- Los botones y textos principales usan `assets/js/site.js`.
- Para agregar nuevas traducciones, sumar claves en el objeto `translations` y usar `data-i18n="clave"` en el HTML.

### Tema oscuro/claro

- El boton de tema esta en `_includes/navbar.html`.
- Las variables de color se controlan en `assets/css/custom.css` con `:root` y `body[data-theme="light"]`.
