# Guía de Traducciones i18n

Esta es una guía para mantener y agregar nuevas traducciones en tu portfolio.

## Estructura de Traducciones

Todas las traducciones están centralizadas en `/src/i18n.ts`. El archivo está organizado en dos idiomas: `en` (inglés) y `es` (español).

```typescript
const resources = {
  en: {
    translation: {
      // Aquí van todas las claves en inglés
    },
  },
  es: {
    translation: {
      // Aquí van todas las claves en español
    },
  },
};
```

## Cómo Usar Traducciones en Componentes Astro

Para usar una traducción en un componente Astro, importa el componente `Translate` y úsalo así:

```astro
---
import Translate from "@/components/Translate";
---

<h1><Translate k="heroTitle" client:load /></h1>
```

El atributo `k` es la clave de la traducción que busca en el archivo `i18n.ts`.

## Cómo Agregar Nuevas Traducciones

### Paso 1: Agregar la clave en i18n.ts

Abre `/src/i18n.ts` y encuentra la sección apropiada. Por ejemplo, si quieres agregar una nueva sección de "Experiencia":

```typescript
const resources = {
  en: {
    translation: {
      // ... otras traducciones ...

      // Experience section
      experienceTitle: 'Experience',
      experienceRole: 'Senior Backend Developer',
      experienceCompany: 'Tech Company Inc.',
      experienceDate: '2023 - Present',
    },
  },
  es: {
    translation: {
      // ... otras traducciones ...

      // Experience section
      experienceTitle: 'Experiencia',
      experienceRole: 'Desarrollador Backend Senior',
      experienceCompany: 'Tech Company Inc.',
      experienceDate: '2023 - Presente',
    },
  },
};
```

### Paso 2: Usar la traducción en tu componente

En tu archivo Astro (como `index.astro`):

```astro
---
import Translate from "@/components/Translate";
---

<section>
  <h2><Translate k="experienceTitle" client:load /></h2>
  <p><Translate k="experienceRole" client:load /></p>
  <p><Translate k="experienceCompany" client:load /></p>
  <p><Translate k="experienceDate" client:load /></p>
</section>
```

## Secciones Existentes

El archivo `i18n.ts` ya tiene estas secciones organizadas:

- **Navigation** - Elementos de navegación
- **Hero / Presentation** - Sección de presentación principal
- **Projects** - Información de proyectos
- **Stacks** - Secciones de tecnologías
- **Contact** - Sección de contacto

## Cómo el Switch de Idioma Funciona

El componente `LanguageSwitcher` (en `/src/components/LanguageSwitcher.tsx`) permite cambiar entre idiomas. Cuando el usuario hace clic en EN o ES:

1. Cambia el idioma en i18next
2. Guarda la preferencia en `localStorage`
3. Todos los componentes `<Translate>` se re-renderizarán con el nuevo idioma

## Estructura de Componentes

- **LanguageSwitcher.tsx** - El botón EN/ES en la esquina superior derecha
- **Translate.tsx** - Componente para traducir texto en Astro
- **i18n.ts** - Archivo central de configuración de traducciones

## Notas Importantes

- El idioma por defecto es **inglés (en)**
- Las preferencias se guardan en `localStorage` y persisten entre sesiones
- Siempre agrega traducciones en ambos idiomas para mantener consistencia
- Usa nombres de claves descriptivos y en camelCase (ej: `heroTitle`, no `hero_title`)

## Ejemplo Completo: Agregar una Nueva Sección

Si quieres agregar una sección de "Certificaciones":

**1. En i18n.ts:**
```typescript
// Certifications section
certificationsTitle: 'Certifications',
certificationsAzure: 'Azure Fundamentals',
certificationsNode: 'Node.js Certified Associate',
```

```typescript
// Certifications section
certificationsTitle: 'Certificaciones',
certificationsAzure: 'Fundamentos de Azure',
certificationsNode: 'Asociado Certificado en Node.js',
```

**2. En index.astro:**
```astro
<section>
  <h2><Translate k="certificationsTitle" client:load /></h2>
  <p><Translate k="certificationsAzure" client:load /></p>
  <p><Translate k="certificationsNode" client:load /></p>
</section>
```

¡Listo! La nueva sección se traducirá automáticamente cuando el usuario cambie de idioma.
