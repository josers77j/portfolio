# Revisión acotada de workflows

Fecha: 2026-10-18.

## Alcance y baseline
Solo los workflows y sus referencias. No es una auditoría del portafolio. Checkout con cambios locales previos conservados; HEAD: `dd38c58cb032fab75bf2ee6b0283fc627eb14d16`.

- `.github/workflows/ci-check.yaml`: SHA-256 `0199043702a002e4dc3b0fbb19b3ea0b390936d3e32468478de371bea5a821b4`.
- `.github/workflows/azure-static-web-apps-zealous-cliff-0e749ab10.yml`: SHA-256 `451a37d3e078b98e0c3435aeb56314a0bcbea0ad9775a1939fb27530da4c180e`.

## Evidencia y cambio autorizado
- CI ejecutaba `npm run check` en pushes y pull requests con Node 18.14.1.
- Azure Static Web Apps desplegaba al actualizar main y gestionaba previews de pull requests.
- El usuario indicó que no se usarán workflows. Se eliminaron ambos archivos. No se modificaron ajustes ni secrets en GitHub o Azure.
- La búsqueda de referencias solo encontró el nombre del secret en el workflow retirado.

## Observación fuera de alcance
`src/data/config.ts` mantiene SITE_URL de la plantilla: https://demo.maxencewolff.com/. Falta el dominio final para corregir sitemap y robots antes de publicar. No se modificó.

## Verificaciones
- `npm run check:portfolio`: 0 errores y 0 advertencias en 12 archivos. La primera ejecución emitió mensajes EPERM del servidor WebSocket del entorno; el diagnóstico de Astro terminó correctamente.
- `npm run build`: completado; 5 páginas generadas. Advertencia de Browserslist desactualizado, sin bloquear compilación.
- Sin archivos YAML activos en `.github/workflows`.
- `git diff --check`: sin errores.

## Próxima revisión
Comprobar que .github/workflows no tenga archivos activos y que Astro/build pasen. Antes de publicar, confirmar dominio final, ajustar SITE_URL y verificar los archivos sitemap y robots generados.
