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

## Manual rapido: gestionar contenido

Esta seccion explica como publicar contenido nuevo (blog, proyectos, cursos, servicios, tienda) y como manejar idioma EN/ES.

### Flujo recomendado (siempre igual)

1. Crear un archivo nuevo en la carpeta correcta.
2. Completar front matter (entre `---` y `---`).
3. Escribir el contenido en Markdown.
4. Levantar en local con `docker compose up --build` y revisar.
5. Ajustar textos/resumenes si hace falta.

### Blog (`_posts/`)

- Ruta: `_posts/`
- Nombre obligatorio: `AAAA-MM-DD-titulo.md`

Ejemplo minimo:

```yaml
---
layout: post
title: "Mi nuevo post"
excerpt: "Resumen breve del articulo"
---
```

Luego agregas el contenido debajo del front matter.

### Proyectos (`_projects/`)

- Ruta: `_projects/`
- Un archivo `.md` por proyecto

Ejemplo:

```yaml
---
title: "Nombre del proyecto"
excerpt: "Resumen corto"
technologies:
  - PLC
  - STM32
---
```

### Servicios (`_services/`)

- Ruta: `_services/`
- Un archivo `.md` por servicio

Ejemplo:

```yaml
---
title: "Nombre del servicio"
excerpt: "Que problema resuelve"
price: "Desde USD 500"
format: "Remoto / Presencial"
---
```

### Cursos (`_courses/`)

- Ruta: `_courses/`
- Un archivo `.md` por curso

Ejemplo:

```yaml
---
title: "Nombre del curso"
excerpt: "Que se aprende y para quien"
level: "Inicial / Intermedio / Avanzado"
duration: "8 semanas"
---
```

### Tienda (`_products/`)

- Ruta: `_products/`
- Un archivo `.md` por pack/producto

Ejemplo:

```yaml
---
title: "Nombre del pack"
excerpt: "Que incluye y para quien es"
price: "USD 120"
delivery: "PDF + videollamada"
cta_email_subject: "Consulta pack"
---
```

### Paginas principales (home, estudios, contacto, etc.)

- Archivos raiz como `index.md`, `estudios.md`, `contacto.md`, etc.
- Se editan directo en esos `.md`.
- Algunas paginas usan claves de traduccion para titulo/subtitulo:

```yaml
title_i18n: pageEducationTitle
lead_i18n: pageEducationLead
```

### Plantillas utiles

- Post tecnico: `plantillas/plantilla-post-proyecto-tecnico.md`
- Producto tienda: `plantillas/plantilla-producto-tienda.md`

## Manual rapido: traduccion EN/ES

### Como funciona hoy

- El switch EN/ES usa `assets/js/site.js`.
- Traduce textos que tengan atributo `data-i18n="clave"`.
- Tambien traduce `alt` con `data-i18n-alt="clave"`.
- El diccionario esta en `translations.en` y `translations.es` dentro de `assets/js/site.js`.

### Que idioma usar para cargar contenido

En el estado actual del sitio:

- Contenido estructural de paginas (navbar, titulos, etiquetas, textos con `data-i18n`) SI cambia entre EN/ES.
- Contenido dinamico de colecciones (`_posts`, `_projects`, `_services`, `_courses`, `_products`) usa los campos del archivo (`title`, `excerpt`, etc.) tal cual, sin cambiar automaticamente por idioma.

Recomendacion practica:

1. Si tu audiencia principal es hispanohablante, carga contenido en espanol como base.
2. Si queres todo bilingue en colecciones, hay que agregar campos por idioma (por ejemplo `title_en`, `excerpt_en`) y ajustar las plantillas para leer el idioma activo.

### Agregar una traduccion nueva (paso a paso)

1. Agregar la clave en `translations.en` y `translations.es` en `assets/js/site.js`.
2. Usar esa clave en HTML/Markdown con `data-i18n="miClave"`.
3. Recargar y probar el boton de idioma.

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

### Cambiar foto de perfil (navbar)

1. Reemplazar `assets/images/profile-placeholder.svg` por tu imagen (por ejemplo `profile.jpg`).
2. Actualizar el `src` en `_includes/navbar.html`.

### Mapa mundial (SVG externo)

- Archivo actual: `assets/images/world-support-map.svg`
- Datos/licencia: `assets/images/world-support-map-license.txt`

### Idioma EN/ES

- Los botones y textos principales usan `assets/js/site.js`.
- Para agregar nuevas traducciones, sumar claves en el objeto `translations` y usar `data-i18n="clave"` en el HTML.

### Tema oscuro/claro

- El boton de tema esta en `_includes/navbar.html`.
- Las variables de color se controlan en `assets/css/custom.css` con `:root` y `body[data-theme="light"]`.
