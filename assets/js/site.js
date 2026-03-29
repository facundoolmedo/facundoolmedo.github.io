(function () {
  const storageLangKey = "site_lang";
  const storageThemeKey = "site_theme";
  let coverageMap = null;
  let coverageTileLayer = null;
  const coverageLayers = {};

  const translations = {
    en: {
      brandTitle: "Facundo Olmedo",
      navProjects: "Projects",
      navEducation: "Education",
      navCourses: "Courses",
      navServices: "Services",
      navStore: "Store",
      navBlog: "Blog",
      navContact: "Contact",
      footerTitle: "Applied Engineering Lab",
      footerSubtitle: "Industrial automation, electronics, and software for real-world solutions.",
      footerBuilt: "Built with Jekyll + Bootstrap",
      themeDark: "Dark",
      themeLight: "Light",
      homeEyebrow: "Applied electronics engineering",
      homeTitle: "I build solutions that connect industry, electronics, and software.",
      homeLead: "Electronics engineer in Argentina with a focus on industrial automation, hardware design, and embedded systems.",
      homeBtnProjects: "View projects",
      homeBtnServices: "Services",
      homeBtnStore: "Store",
      homeBtnBlog: "Tech blog",
      homeMetricProfile: "Profile",
      homeMetricRole: "Electronics Engineer",
      homeMetricSector: "Sector",
      homeMetricAutomation: "Automation",
      homeMetricCurrent: "Current role",
      homeMetricCurrentValue: "Marvell AR",
      homeMetricStack: "Stack",
      homeMetricStackValue: "PLC + MCU + Web",
      homeCardProjectsEyebrow: "Technical portfolio",
      homeCardProjectsTitle: "Projects",
      homeCardProjectsText: "Real automation cases, PCB design, and hardware plus software solutions.",
      homeCardEducationEyebrow: "Academic foundation",
      homeCardEducationTitle: "Education",
      homeCardEducationText: "Strong academic base in digital electronics, signal acquisition, RF, power electronics, and virtual instruments.",
      homeCardStoreEyebrow: "Commercial",
      homeCardStoreTitle: "Store",
      homeCardStoreText: "Technical packs, consulting, and resources for companies, workshops, and advanced students.",
      homeTechEyebrow: "Core technologies",
      homeProfileAlt: "Profile photo",
      coverageEyebrow: "Support coverage",
      coverageTitle: "Technical support footprint",
      coverageLead: "Our company provides technical and project support for industrial and embedded solutions across multiple regions.",
      coverageRegion1: "Argentina on-site support and implementation.",
      coverageRegion2: "South America regional support coverage.",
      coverageRegion3: "Europe design and integration collaboration.",
      coverageRegion4: "United States remote support only.",
      coverageMapAlt: "World support map",
      pageProjectsTitle: "Projects",
      pageProjectsLead: "Industrial automation, hardware design, and embedded systems applied to production.",
      pageEducationTitle: "Education",
      pageEducationLead: "Training focused on solving real-world electronics and control problems.",
      pageCoursesTitle: "Courses",
      pageCoursesLead: "Technical training for teams and professionals who want to accelerate results.",
      pageServicesTitle: "Services",
      pageServicesLead: "Professional services for companies, workshops, and development teams.",
      pageStoreTitle: "Store",
      pageStoreLead: "Technical packs and services ready to hire via WhatsApp or email.",
      pageContactTitle: "Contact",
      pageContactLead: "Consulting, custom projects, training, or technical collaborations.",
      pageBlogTitle: "Blog",
      pageBlogLead: "Technical posts on automation, electronics, and product development.",
      educationCard1Title: "Electronics Engineering",
      educationCard1Text: "Academic foundation in analog/digital electronics, signals, instrumentation, and control systems.",
      educationCard2Title: "Digital techniques and signal acquisition",
      educationCard2Text: "Board design for development practice, data capture, and integration with analysis software.",
      educationCard3Title: "Virtual instruments",
      educationCard3Text: "Building measurement and visualization tools for laboratory and system testing.",
      educationCard4Title: "RF and power PCB design",
      educationCard4Text: "PCB design and validation for radio-frequency and power-electronics applications.",
      coursesLevelLabel: "Level:",
      coursesDurationLabel: "Duration:",
      servicesInvestmentLabel: "Investment:",
      servicesFormatLabel: "Format:",
      storePriceLabel: "Price:",
      storeDeliveryLabel: "Delivery:",
      storeBuyWhatsapp: "Buy via WhatsApp",
      storeBuyEmail: "Buy via email",
      storeNoteEyebrow: "Note",
      storeNoteText: "If you need a custom pack, contact me and we can build a tailored proposal for your company or project.",
      contactHowTitle: "How I work",
      contactStep1: "Technical assessment of the problem.",
      contactStep2: "Proposal with scope, timeline, and deliverables.",
      contactStep3: "Phased development and validation.",
      contactStep4: "Documentation and commissioning support.",
      contactChannelsTitle: "Channels",
      contactNameLabel: "Name:",
      contactEmailLabel: "Email:",
      contactLocationLabel: "Location:",
      contactSendEmail: "Send email",
      contactWhatsapp: "WhatsApp",
      pinArgentina: "Argentina",
      pinSouthAmerica: "South America",
      pinEurope: "Europe",
      pinUSRemote: "US (remote only)"
    },
    es: {
      brandTitle: "Facundo Olmedo",
      navProjects: "Proyectos",
      navEducation: "Estudios",
      navCourses: "Cursos",
      navServices: "Servicios",
      navStore: "Tienda",
      navBlog: "Blog",
      navContact: "Contacto",
      footerTitle: "Laboratorio de Ingenieria Aplicada",
      footerSubtitle: "Automatizacion industrial, electronica y software para soluciones reales.",
      footerBuilt: "Hecho con Jekyll + Bootstrap",
      themeDark: "Oscuro",
      themeLight: "Claro",
      homeEyebrow: "Ingenieria electronica aplicada",
      homeTitle: "Diseno soluciones que conectan industria, electronica y software.",
      homeLead: "Ingeniero electronico en Argentina con foco en automatizacion industrial, diseno de hardware y sistemas embebidos.",
      homeBtnProjects: "Ver proyectos",
      homeBtnServices: "Servicios",
      homeBtnStore: "Tienda",
      homeBtnBlog: "Blog tecnico",
      homeMetricProfile: "Perfil",
      homeMetricRole: "Ing. Electronico",
      homeMetricSector: "Sector",
      homeMetricAutomation: "Automatizacion",
      homeMetricCurrent: "Trabajo actual",
      homeMetricCurrentValue: "Marvell AR",
      homeMetricStack: "Stack",
      homeMetricStackValue: "PLC + MCU + Web",
      homeCardProjectsEyebrow: "Portafolio tecnico",
      homeCardProjectsTitle: "Proyectos",
      homeCardProjectsText: "Casos reales de automatizacion, diseno de placas y soluciones de hardware + software.",
      homeCardEducationEyebrow: "Formacion",
      homeCardEducationTitle: "Estudios",
      homeCardEducationText: "Base academica en electronica digital, adquisicion de senales, RF, potencia e instrumentos virtuales.",
      homeCardStoreEyebrow: "Comercial",
      homeCardStoreTitle: "Tienda",
      homeCardStoreText: "Packs tecnicos, consultoria y recursos para empresas, talleres y estudiantes avanzados.",
      homeTechEyebrow: "Tecnologias clave",
      homeProfileAlt: "Foto de perfil",
      coverageEyebrow: "Cobertura de soporte",
      coverageTitle: "Alcance tecnico internacional",
      coverageLead: "La empresa brinda soporte tecnico y de proyectos para soluciones industriales y embebidas en distintas regiones.",
      coverageRegion1: "Argentina con soporte e implementacion en sitio.",
      coverageRegion2: "Sudamerica con cobertura regional.",
      coverageRegion3: "Europa con colaboracion en diseno e integracion.",
      coverageRegion4: "Estados Unidos con soporte remoto unicamente.",
      coverageMapAlt: "Mapa mundial de cobertura",
      pageProjectsTitle: "Proyectos",
      pageProjectsLead: "Automatizacion industrial, diseno de hardware y sistemas embebidos aplicados a produccion.",
      pageEducationTitle: "Estudios",
      pageEducationLead: "Formacion orientada a resolver problemas reales en electronica y control.",
      pageCoursesTitle: "Cursos",
      pageCoursesLead: "Formacion tecnica para equipos y profesionales que quieran acelerar resultados.",
      pageServicesTitle: "Servicios",
      pageServicesLead: "Servicios profesionales para empresas, talleres y equipos de desarrollo.",
      pageStoreTitle: "Tienda",
      pageStoreLead: "Packs tecnicos y servicios listos para contratar por WhatsApp o email.",
      pageContactTitle: "Contacto",
      pageContactLead: "Consultoria, proyectos a medida, capacitaciones o colaboraciones tecnicas.",
      pageBlogTitle: "Blog",
      pageBlogLead: "Publicaciones tecnicas sobre automatizacion, electronica y desarrollo de productos.",
      educationCard1Title: "Ingenieria Electronica",
      educationCard1Text: "Base academica en electronica analogica/digital, senales, instrumentacion y sistemas de control.",
      educationCard2Title: "Tecnicas digitales y adquisicion de senales",
      educationCard2Text: "Diseno de placas para practicas de desarrollo, captura de datos e integracion con software de analisis.",
      educationCard3Title: "Instrumentos virtuales",
      educationCard3Text: "Construccion de herramientas de medicion y visualizacion para laboratorio y testeo de sistemas.",
      educationCard4Title: "Diseno de placas RF y potencia",
      educationCard4Text: "Diseno y validacion de PCBs en aplicaciones de radiofrecuencia y electronica de potencia.",
      coursesLevelLabel: "Nivel:",
      coursesDurationLabel: "Duracion:",
      servicesInvestmentLabel: "Inversion:",
      servicesFormatLabel: "Modalidad:",
      storePriceLabel: "Precio:",
      storeDeliveryLabel: "Entrega:",
      storeBuyWhatsapp: "Comprar por WhatsApp",
      storeBuyEmail: "Comprar por email",
      storeNoteEyebrow: "Nota",
      storeNoteText: "Si queres un pack personalizado, escribime y armamos una propuesta a medida para tu empresa o proyecto.",
      contactHowTitle: "Como trabajo",
      contactStep1: "Relevamiento tecnico del problema.",
      contactStep2: "Propuesta con alcance, tiempos y entregables.",
      contactStep3: "Desarrollo y validacion en etapas.",
      contactStep4: "Documentacion y soporte de puesta en marcha.",
      contactChannelsTitle: "Canales",
      contactNameLabel: "Nombre:",
      contactEmailLabel: "Email:",
      contactLocationLabel: "Ubicacion:",
      contactSendEmail: "Enviar email",
      contactWhatsapp: "WhatsApp",
      pinArgentina: "Argentina",
      pinSouthAmerica: "Sudamerica",
      pinEurope: "Europa",
      pinUSRemote: "EEUU (solo remoto)"
    }
  };

  function updateCoverageMapLanguage(lang) {
    if (!coverageMap) {
      return;
    }

    const dict = translations[lang] || translations.en;
    const labelByKey = {
      argentina: dict.pinArgentina,
      southAmerica: dict.pinSouthAmerica,
      europe: dict.pinEurope,
      usRemote: dict.pinUSRemote
    };

    Object.keys(coverageLayers).forEach(function (key) {
      const layer = coverageLayers[key];
      if (!layer) {
        return;
      }

      if (layer.getTooltip()) {
        layer.setTooltipContent(labelByKey[key]);
      }
    });
  }

  function getTileLayerConfig(theme) {
    if (theme === "light") {
      return {
        url: "https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png",
        options: {
          maxZoom: 20,
          subdomains: "abcd",
          noWrap: true,
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      };
    }

    return {
      url: "https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png",
      options: {
        maxZoom: 20,
        subdomains: "abcd",
        noWrap: true,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      }
    };
  }

  function getCoverageStyleSet(theme) {
    if (theme === "light") {
      return {
        onsite: {
          color: "#8f4a0f",
          weight: 1,
          fillColor: "#d76700",
          fillOpacity: 0.22
        },
        remote: {
          color: "#9d3f21",
          weight: 1,
          fillColor: "#cc4e22",
          fillOpacity: 0.18,
          dashArray: "6 4"
        }
      };
    }

    return {
      onsite: {
        color: "#ffd6a6",
        weight: 1,
        fillColor: "#f28705",
        fillOpacity: 0.3
      },
      remote: {
        color: "#ffe8c7",
        weight: 1,
        fillColor: "#f25f29",
        fillOpacity: 0.22,
        dashArray: "6 4"
      }
    };
  }

  function applyCoverageMapTheme(theme) {
    if (!coverageMap || typeof window.L === "undefined") {
      return;
    }

    const normalizedTheme = theme === "light" ? "light" : "dark";
    const tileConfig = getTileLayerConfig(normalizedTheme);
    if (coverageTileLayer) {
      coverageMap.removeLayer(coverageTileLayer);
    }

    coverageTileLayer = window.L.tileLayer(tileConfig.url, tileConfig.options).addTo(coverageMap);

    const styleSet = getCoverageStyleSet(normalizedTheme);
    if (coverageLayers.argentina) {
      coverageLayers.argentina.setStyle(styleSet.onsite);
    }
    if (coverageLayers.southAmerica) {
      coverageLayers.southAmerica.setStyle(styleSet.onsite);
    }
    if (coverageLayers.europe) {
      coverageLayers.europe.setStyle(styleSet.onsite);
    }
    if (coverageLayers.usRemote) {
      coverageLayers.usRemote.setStyle(styleSet.remote);
    }
  }

  function initCoverageMap(lang) {
    const mapNode = document.getElementById("coverage-map");
    if (!mapNode || typeof window.L === "undefined") {
      return;
    }

    if (coverageMap) {
      updateCoverageMapLanguage(lang);
      return;
    }

    const dict = translations[lang] || translations.en;

    const initialTheme = document.body.getAttribute("data-theme") || localStorage.getItem(storageThemeKey) || "dark";

    coverageMap = window.L.map(mapNode, {
      zoomControl: true,
      scrollWheelZoom: false,
      worldCopyJump: false,
      maxBounds: [
        [-85, -180],
        [85, 180]
      ],
      maxBoundsViscosity: 1.0,
      minZoom: 2,
      maxZoom: 6
    }).setView([14, -25], 2);

    const styleSet = getCoverageStyleSet(initialTheme);

    coverageLayers.argentina = window.L.polygon([
      [-21.8, -65.6],  // NW: Bolivia-Chile-Arg corner
      [-21.8, -63.8],  // Bolivia border E
      [-21.3, -62.7],  // Bolivia/Paraguay corner
      [-23.0, -61.4],  // N Paraguay border
      [-24.0, -59.9],
      [-26.4, -58.3],
      [-28.0, -56.5],  // Corrientes
      [-25.5, -54.3],  // Misiones NE tip
      [-26.8, -55.8],  // Misiones S
      [-29.5, -57.2],  // Entre Ríos
      [-31.5, -57.9],  // Uruguay border
      [-33.9, -58.2],  // Buenos Aires
      [-35.5, -57.1],  // Río de la Plata outlet
      [-37.2, -57.1],  // Atlantic coast N
      [-38.8, -60.0],
      [-41.0, -62.7],  // Bahía Blanca
      [-42.8, -64.5],
      [-44.8, -65.6],  // Puerto Madryn
      [-47.2, -65.7],
      [-49.2, -67.2],  // Puerto Deseado
      [-51.3, -68.8],  // Santa Cruz
      [-52.5, -69.0],  // Magellan Strait E
      [-50.5, -72.5],  // Lake district W
      [-48.5, -72.0],
      [-46.5, -71.8],
      [-44.5, -71.5],
      [-42.5, -72.0],
      [-41.0, -71.5],  // Neuquén
      [-38.5, -70.9],
      [-36.0, -70.5],
      [-33.0, -70.1],  // Mendoza / Andes
      [-30.0, -69.3],
      [-27.2, -68.7],
      [-24.0, -68.1],
      [-21.8, -65.6]   // back to NW
    ], styleSet.onsite)
      .bindTooltip(dict.pinArgentina, { permanent: true, direction: "center", className: "coverage-tooltip" })
      .addTo(coverageMap);

    coverageLayers.southAmerica = window.L.polygon([
      [12.5, -71.8],   // Guajira Peninsula (northernmost)
      [11.2, -74.0],   // Colombia Caribbean
      [9.0, -76.5],    // Darién/Colombia
      [7.5, -78.0],
      [5.5, -77.5],    // Colombia Pacific
      [2.0, -79.0],    // Ecuador N
      [-1.5, -80.5],   // Ecuador SW
      [-3.8, -80.8],   // Peru NW
      [-6.5, -80.0],
      [-10.0, -78.0],
      [-14.0, -76.0],
      [-17.5, -71.5],  // S Peru coast
      [-18.5, -70.5],  // Peru-Chile border (Arica)
      [-22.0, -70.2],
      [-26.0, -70.6],
      [-30.0, -71.5],
      [-33.5, -72.0],  // Valparaíso/Santiago
      [-37.5, -73.5],
      [-41.5, -73.5],
      [-44.5, -74.5],
      [-47.5, -75.5],
      [-51.5, -75.0],  // W Patagonia
      [-55.5, -68.0],  // Cape Horn southernmost
      [-54.0, -66.5],  // TdF E coast
      [-52.0, -68.8],  // Strait of Magellan
      [-50.8, -68.5],
      [-49.0, -67.0],
      [-47.2, -65.5],
      [-45.0, -65.5],
      [-43.2, -64.5],
      [-41.0, -62.8],
      [-38.5, -59.0],
      [-36.5, -56.9],
      [-34.8, -58.2],  // Buenos Aires
      [-31.5, -57.9],
      [-30.2, -51.0],  // Porto Alegre area
      [-27.5, -48.5],
      [-23.0, -43.2],  // Rio de Janeiro
      [-19.0, -39.8],
      [-15.0, -38.9],  // Salvador
      [-12.3, -37.1],
      [-9.0, -35.5],   // Recife
      [-5.5, -35.0],   // Natal (easternmost)
      [-2.5, -44.5],   // Maranhão
      [-1.0, -48.5],   // Amapá
      [4.5, -51.5],    // French Guiana
      [6.0, -52.8],    // Suriname
      [7.5, -57.8],    // Guyana
      [8.5, -60.0],
      [10.0, -62.5],   // E Venezuela
      [11.0, -65.5],
      [11.8, -70.0],   // W Venezuela
      [12.5, -71.8]    // back to Guajira
    ], styleSet.onsite)
      .bindTooltip(dict.pinSouthAmerica, { permanent: true, direction: "center", className: "coverage-tooltip" })
      .addTo(coverageMap);

    coverageLayers.europe = window.L.polygon([
      [37.0, -9.0],    // SW Portugal (Cape St. Vincent)
      [39.5, -9.5],    // Portugal W coast
      [42.0, -9.0],    // Galicia
      [44.0, -8.5],    // N Spain Atlantic
      [43.5, -4.0],    // Cantabria
      [43.5, -2.0],    // Basque
      [44.5, -1.5],    // Bay of Biscay
      [47.5, -3.0],    // Brittany
      [50.5, 1.5],     // Calais/N France
      [53.0, 5.0],     // Netherlands
      [54.8, 8.5],     // Germany/Denmark border
      [56.5, 9.0],     // Jutland
      [57.5, 7.5],     // Skagerrak/SW Norway
      [60.5, 5.0],     // Bergen/W Norway
      [63.0, 8.0],     // Mid Norway
      [67.0, 14.0],    // N Norway
      [70.0, 21.0],
      [71.0, 26.0],    // North Cape
      [70.0, 30.0],
      [68.5, 29.0],
      [65.0, 27.5],    // N Finland
      [60.5, 29.0],    // St Petersburg area
      [57.5, 24.0],    // Baltic states
      [54.5, 21.0],
      [54.0, 19.0],    // Poland Baltic
      [54.0, 11.0],    // German Baltic coast
      [52.5, 14.5],    // Central Germany/Poland
      [50.5, 16.0],    // Czech/Poland
      [49.0, 22.5],    // Slovakia/Ukraine
      [46.5, 23.5],    // Romania/Hungary
      [45.5, 30.0],    // Romania Black Sea
      [43.5, 29.0],    // Bulgaria Black Sea
      [41.0, 29.5],    // Istanbul
      [41.5, 27.0],    // Thrace
      [40.0, 25.5],    // N Greece
      [37.5, 23.5],    // Athens
      [37.0, 22.0],    // Peloponnese W
      [38.5, 20.5],    // Epirus/Albania
      [40.5, 19.0],    // Albania/Montenegro
      [42.0, 18.5],    // Adriatic coast
      [43.5, 16.5],    // Dalmatia
      [44.5, 14.0],    // N Adriatic/Trieste
      [44.0, 13.0],    // Central Adriatic
      [42.5, 12.5],    // Rome/Lazio coast
      [40.5, 15.0],    // S Italy/Campania
      [38.5, 16.0],    // Calabria
      [38.0, 13.0],    // Sicily N
      [39.5, 9.0],     // Sardinia
      [41.0, 8.5],     // Corsica
      [43.0, 7.5],     // French Riviera
      [43.5, 5.0],     // Marseille
      [42.0, 3.5],     // Catalan coast
      [40.5, 0.5],     // Valencia
      [38.0, -1.0],    // SE Spain
      [36.5, -2.5],    // Almería
      [36.0, -5.5],    // Gibraltar
      [36.5, -7.2],    // SW Spain
      [37.0, -9.0]     // back to SW Portugal
    ], styleSet.onsite)
      .bindTooltip(dict.pinEurope, { permanent: true, direction: "center", className: "coverage-tooltip" })
      .addTo(coverageMap);

    coverageLayers.usRemote = window.L.polygon([
      [49.0, -124.0],
      [49.0, -95.0],
      [47.0, -90.0],
      [46.0, -84.0],
      [45.0, -79.0],
      [44.0, -74.0],
      [42.0, -70.0],
      [40.0, -69.0],
      [37.0, -75.0],
      [35.0, -77.0],
      [33.0, -79.0],
      [31.0, -81.0],
      [30.0, -84.0],
      [29.0, -87.0],
      [30.0, -90.0],
      [29.0, -94.0],
      [28.0, -97.0],
      [27.0, -100.0],
      [28.0, -104.0],
      [30.0, -107.0],
      [31.0, -111.0],
      [32.0, -114.0],
      [34.0, -117.0],
      [37.0, -121.0],
      [41.0, -123.0],
      [45.0, -124.0],
      [49.0, -124.0]
    ], styleSet.remote)
      .bindTooltip(dict.pinUSRemote, { permanent: true, direction: "center", className: "coverage-tooltip" })
      .addTo(coverageMap);

    applyCoverageMapTheme(initialTheme);
  }

  function applyLanguage(lang) {
    const dict = translations[lang] || translations.en;
    document.documentElement.lang = lang === "es" ? "es-AR" : "en";

    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      const key = node.getAttribute("data-i18n");
      if (dict[key]) {
        node.textContent = dict[key];
      }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (node) {
      const key = node.getAttribute("data-i18n-alt");
      if (dict[key]) {
        node.setAttribute("alt", dict[key]);
      }
    });

    const langButton = document.getElementById("language-toggle");
    if (langButton) {
      langButton.textContent = lang === "en" ? "ES" : "EN";
    }

    const themeButton = document.getElementById("theme-toggle");
    if (themeButton) {
      const theme = document.body.getAttribute("data-theme") || "dark";
      themeButton.textContent = theme === "dark" ? dict.themeDark : dict.themeLight;
    }

    localStorage.setItem(storageLangKey, lang);
    updateCoverageMapLanguage(lang);
  }

  function applyTheme(theme) {
    const normalizedTheme = theme === "light" ? "light" : "dark";
    document.body.setAttribute("data-theme", normalizedTheme);

    const lang = localStorage.getItem(storageLangKey) || "en";
    const dict = translations[lang] || translations.en;
    const themeButton = document.getElementById("theme-toggle");
    if (themeButton) {
      themeButton.textContent = normalizedTheme === "dark" ? dict.themeDark : dict.themeLight;
    }

    localStorage.setItem(storageThemeKey, normalizedTheme);
    applyCoverageMapTheme(normalizedTheme);
  }

  const initialTheme = localStorage.getItem(storageThemeKey) || "dark";
  const initialLang = localStorage.getItem(storageLangKey) || "en";

  initCoverageMap(initialLang);
  applyTheme(initialTheme);
  applyLanguage(initialLang);

  const langButton = document.getElementById("language-toggle");
  if (langButton) {
    langButton.addEventListener("click", function () {
      const current = localStorage.getItem(storageLangKey) || "en";
      const next = current === "en" ? "es" : "en";
      applyLanguage(next);
    });
  }

  const themeButton = document.getElementById("theme-toggle");
  if (themeButton) {
    themeButton.addEventListener("click", function () {
      const current = document.body.getAttribute("data-theme") || "dark";
      const next = current === "dark" ? "light" : "dark";
      applyTheme(next);
    });
  }
})();
