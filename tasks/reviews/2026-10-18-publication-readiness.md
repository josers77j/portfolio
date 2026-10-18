# Revisión final de preparación para publicar

Fecha: 2026-10-18.

## Alcance
Lectura de la versión local actual: contenido público, rutas generadas, enlaces, navegación, temas, idiomas, adaptación responsive y comandos configurados. No es una auditoría de seguridad, de dependencias ni de los proyectos enlazados. El usuario pidió diagnóstico; no se corrigieron hallazgos. Solo se guarda este registro y se actualiza el índice.

## Baseline y registro previo
HEAD: `dd38c58cb032fab75bf2ee6b0283fc627eb14d16`. Se revisó `2026-10-18-workflows.md`; ambos workflows siguen eliminados, y la URL de plantilla señalada allí continúa sin cambios. Los archivos heredados `src/components/shared/sidebar.astro` y `src/pages/posts/[slug].astro` no tienen diferencias respecto de HEAD. Los cambios locales previos se conservaron.

Hashes SHA-256 del snapshot relevante:
- `src/data/config.ts`: `6bb92e839921619c1ccf17fd0694bd26ee45e8b5d5d572b8a7764fb357cf1ada`
- `astro.config.mjs`: `911dc953e8edcc31aad4b5b0dce8d0eb9c2b0eb43a83b1c672fb9951d492b771`
- `tsconfig.json`: `59979aa229d354819792fc445ebc17b18c20a3fa9da05546400dd18f4857f887`
- `tsconfig.portfolio.json`: `42ba9632ce12f230f5b8561b3aa789cbda0904e5824d0da32094d34a39dccea3`
- `src/data/portfolio.ts`: `8a7251b8b8914eaea231ef7e315706cf8f904f5919b6ca33286f7534c181e993`
- `src/data/constants.ts`: `09493c1766092526db39cc10b138537710a852a68955c3b5a9cfbea20723bc73`
- `src/components/portfolio/Introduction.astro`: `b61bc6bde4a963cafa8641fa27ebbdc60f590ce5579290c41e0c6ffa9bea207f`
- `src/components/portfolio/SectionNavigation.astro`: `3a81d9a923afa0ac75935a42e153c4237af0c19649427c31d1a7b1ea7e16976b`
- `src/components/portfolio/Experience.astro`: `2ffd3a74c9a57a5abf5a24e4699958427ec8548a2d3743de1f1288020d5a975f`
- `src/components/portfolio/Projects.astro`: `04ba9b12dba0d141d23cac917713279da77ce64af5ebf021e5227f04d9346ae3`
- `src/components/portfolio/Stack.astro`: `e98d6f2d2901d08cb48e10708a9fde788c8dc9fdf21fa26d377ddaeffc6e99f0`
- `src/components/portfolio/PortfolioPage.astro`: `1f6988b473520bc413302f72d0acf8d97785e14361bddf585c0c31011e535b56`
- `src/layouts/PortfolioLayout.astro`: `34ad4a1ba5047b34c9ceab32e91e299f4545dff0343e403328115f712c4ab61d`
- `src/styles/portfolio.css`: `2bccbb74893989df53a7b4262cf57fc5b333376c2f0702119bac4ebf7c2857a2`
- `src/components/shared/sidebar.astro`: `69f7c4f756099b99cd783016e1a61c2e1d7ce8f65be52bf1c8db6c02104847cf`
- `src/pages/posts/[slug].astro`: `93bb5a1e5815a4e662396acd5c199cf6c105c7b27929ed7b5e7069e6b670742d`
- `src/pages/posts/index.astro`: `eda2277852de56390a3e1a1bdded160edf71c905314d0921cf314bedd84b3d73`
- `src/components/seo/SEOTags.astro`: `74afe501083113cdefa7e505f960c97c5d1d25b5c49efa3a79c26b4e763e1006`
- `src/content/posts/02-untitled.md`: `a3d87885692540099d38cdb4696e288c4d2c6ccfaeca8ff870aaeffd47105a8f`
- `src/content/posts/01-the-power-of-react-hooks copy.md`: `f1b30f9dd91d310fb0a759712e9ae4686ee728aeffa1d19425d0136f22b73766`

## Hallazgos
1. **P2 — Dominio de plantilla en sitemap y robots.** `src/data/config.ts:1` conserva https://demo.maxencewolff.com/. `dist/sitemap-index.xml`, `dist/sitemap-0.xml` y `dist/robots.txt` apuntan a ese dominio. Confirmar URL final antes de publicar; no inventarla.
2. **P2 — Artículos de ejemplo aún públicos.** `src/content/posts/02-untitled.md` y `01-the-power-of-react-hooks copy.md` contienen Lorem ipsum. El build sigue generando `/posts/`, `/posts/untitled/` y `/posts/the-power-of-react-hooks/`, incluidas en sitemap. El head de esas páginas conserva descripción de plantilla y referencias sociales del autor original en `src/components/seo/SEOTags.astro`. Decidir retirar del sitio público o sustituir contenido; cambiar solo isPublish no basta porque `src/pages/posts/[slug].astro` genera toda la colección sin filtrar.
3. **P2 — Título principal recortado en móvil de 320 px.** Evidencia visual y DOM: `h1` en `src/styles/portfolio.css:767` fija 3.05rem (48.8px), caja de 282.43px con extremo derecho 325.43px, dentro de panel de 288px con padding y overflow hidden. Las palabras se recortan por la derecha. Sin desbordamiento horizontal global, pero sí recorte real. A 390px no hubo desbordamiento global. Evidencia: outputs/revision-movil-320.png en el workspace del chat.
4. **P2 — El chequeo global configurado no pasa.** `npm run check` termina con 13 errores y 55 hints en 46 archivos. Doce errores corresponden al frontmatter ausente del sidebar heredado (`src/components/shared/sidebar.astro:1`); uno al import de tipo CollectionEntry (`src/pages/posts/[slug].astro:2`). Son archivos sin cambios respecto a HEAD. El chequeo global también recorre dist por falta de exclusión en tsconfig, generando mucho ruido; ese ruido no se debe confundir con fallos del portafolio nuevo.

## Mejoras opcionales
- Captura real de WheelDesk; se conserva una ilustración en su tarjeta. No bloquea funcionamiento.
- CV descargable cuando el usuario entregue un archivo real; no hay PDF/DOCX en public.
- Metadatos Open Graph propios en el nuevo layout antes de compartirlo si se quiere una vista previa social controlada.

## Verificaciones ejecutadas
- `npm run check`: exit 1, 13 errors, 0 warnings, 55 hints (46 archivos); evidencia resumida arriba.
- `npm run check:portfolio`: exit 0, 0 errores y 0 advertencias (12 archivos).
- `npm run build`: exit 0, cinco páginas generadas. Aviso Browserslist desactualizado, no bloqueante.
- `git diff --check`: sin errores.
- Sin archivos YAML activos en `.github/workflows`.
- Enlaces externos: 15 destinos revisados por HTTP GET. 14 respondieron 200, incluyendo los repositorios, organización de microservicios y cuatro demos. LinkedIn respondió 503; no se concluye enlace roto ni perfil inexistente. No se probaron login ni funcionalidades internas de las demos.
- UI: español/inglés, navegación de escritorio a Comunidad con una sección activa y dos vecinas, switch de tema y persistencia tras recargar, cambio de idioma conservando #comunidad, botón volver al inicio y ocultación al entrar en el tramo inicial.
- Viewports: 1440x900, 390x844 y 320x740. No desbordamiento horizontal global. Recorte del título a 320px. Se restauró viewport normal y tema original tras las pruebas.
- No se envió mensaje por Slack, siguiendo la preferencia del usuario.

## Límites y preguntas pendientes
URL de producción aún no proporcionada; no se verificó un despliegue público. Fechas, cargos y modalidad laboral se toman del contenido aprobado por el usuario, no de documentos externos. No se auditó la seguridad del software enlazado. LinkedIn sin validación concluyente por 503.

## Próximos pasos exactos
Confirmar dominio final; retirar o sustituir blog de ejemplo y metadatos heredados; ajustar título para 320–390px; reparar o retirar componentes/rutas legacy autorizados y excluir dist del chequeo. Volver a ejecutar check global y build. Revisar sitemap/robots contra dominio final, repetir captura del hero a 320px y humo de navegación/idioma/tema. Releer este registro y comparar hashes antes de retomar.

## Resultado
La página principal compila y sus interacciones principales funcionan. No se considera lista para publicación final hasta resolver los cuatro hallazgos.

## Seguimiento autorizado — 2026-10-18
El usuario autorizó borrar el rastro del blog, ajustar el título móvil y resolver lint/chequeo.

- Hallazgo 2 resuelto: retiradas rutas, contenidos, configuración de colección, layout/SEO/estilos/helpers exclusivos del blog, PostCard no referenciado y su imagen social de plantilla. Desinstalados astro-font y astro-seo con actualización de lockfile. No se eliminaron los proyectos ni los componentes ajenos al blog.
- Hallazgo 3 resuelto: título móvil con clamp y límite de ancho; verificado en 320, 360 y 390px. Evidencia nueva: outputs/titulo-movil-corregido.png del workspace del chat. En inglés también cabe a 390px.
- Hallazgo 4 resuelto: frontmatter corregido en sidebar antiguo, exclusión de dist y node_modules en tsconfig, limpieza de 3 símbolos sin uso. ESLint CommonJS movido de .eslintrc.js a .eslintrc.cjs y comando npm run lint añadido con el preset Astro ya instalado y parser TypeScript.
- `npm run lint`: exit 0; sin advertencias.
- `npm run check`: exit 0; 35 archivos, 0 errores, 0 advertencias, 0 hints.
- `npm run build`: exit 0; solo dos páginas (es/en), sin posts en dist/sitemap y sin imagen social antigua. Aviso de Browserslist desactualizado y mensaje de cancelación del optimizador de Vite al cargar configuración; la comprobación y compilación reales concluyeron exitosamente.
- HTTP local: / y /en/ responden 200; /posts/, /posts/untitled/ y /posts/the-power-of-react-hooks/ responden 404.
- `git diff --check`: sin errores. Siete tarjetas, Node.js/ASP.NET Core y assets locales de proyectos intactos en ambos idiomas.
- Hallazgo 1 sigue pendiente: usuario considera adquirir un .tech; no se eligió ni compró un dominio y no se inventó SITE_URL. Recomendación de nombre: rubentrejo.tech, con disponibilidad sin confirmar.

Hashes del nuevo estado relevante:
- `package.json`: `fe7e71ef69eff7c9ff7c853acd25ea8448091a472b7587b4d5a43875407ff60b`
- `package-lock.json`: `b8b37ca2260d393b945c169bc0eb924e2aecfe269e465a97fcdbae41ad9a9a9a`
- `.eslintrc.cjs`: `9bf9aa0a455f523f062908df73ea57e2b2f488a82424fabc1c200f4c5bf111b4`
- `tsconfig.json`: `dd81874eec18ced341220bada447376ffd7f5895778ee69b806a0f4df25cfbc0`
- `src/styles/portfolio.css`: `544a5bbf692009c995f3b35814b617f7b029d498dd599c85536a72b3eab48b0b`
- `src/components/shared/sidebar.astro`: `01d1aaaaace64db6972b000282ec1d7950117886ed58dc0ee7ef0899e3fe1dd5`
- `src/components/ProjectCard.astro`: `7648bb88dc5827a935721faa3ece335bb58b2c7612b276b8d5e5a4713773f40d`
- `src/components/SidebarNavReact.tsx`: `a8da90ea9e6a112013d180881f015aa5ce0c67a74e73144d65007e4c5f73db12`

Siguiente paso: confirmar dominio adquirido y actualizar SITE_URL; repetir build y comprobar URLs de sitemap/robots. Cambios locales sin commit ni push.


## URL pública e icono — 2026-10-18
El usuario proporcionó https://portfolio-rbntrj.netlify.app/ y autorizó personalizar el favicon. SITE_URL actualizado; hallazgo 1 resuelto para el build local. Favicon de Astro sustituido por monograma JT en SVG, fondo oscuro, letras claras y punto naranja.

Verificación: npm run lint exit 0; npm run build exit 0, dos páginas generadas. El entorno restringió el WebSocket auxiliar de Vite (EPERM en puerto 24678); la compilación estática terminó correctamente. Persisten avisos de Browserslist y cancelación del optimizador ya observados. SVG validado como XML y copia a dist idéntica; sitemap-index.xml, sitemap-0.xml y robots.txt contienen la URL de Netlify y no el dominio de plantilla. No se ejecutó despliegue, commit ni push.

Siguiente paso: publicar estos cambios en Netlify y comprobar favicon y sitemap en producción; esta validación no confirma el estado del sitio remoto.

- SHA256 `src/data/config.ts`: `48a2e848a41ff2c08930fa7991177e1f41346f80a832a862cbba49fbb416b7be`
- SHA256 `public/favicon.svg`: `69baf14600a323b2f4685e34266bb885da7dfeba80294c563782401af8ce2c86`
