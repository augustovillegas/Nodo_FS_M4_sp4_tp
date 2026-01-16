<div align="center">

# 🧪 Buscador de Personajes Rick & Morty

Explora personajes del multiverso, guarda favoritos y navega con una UI animada construida en React + Vite.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=000)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=fff)
![Tailwind](https://img.shields.io/badge/TailwindCSS-4-38B2AC?logo=tailwindcss&logoColor=fff)
![Axios](https://img.shields.io/badge/Axios-1.12-5A29E4?logo=axios&logoColor=fff)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12-ff008c?logo=framer&logoColor=fff)

[Demo](https://buscador-personajes.netlify.app/) ·
[API](https://rickandmortyapi.com/documentation) ·
[Docs](https://rickandmortyapi.com/documentation/#rest) ·
[LinkedIn](https://www.linkedin.com/in/augustovillegas/)

**Índice rápido**
[Descripción](#-descripción) ·
[Stack](#-stack-tecnológico) ·
[Inicio rápido](#-inicio-rápido) ·
[Arquitectura](#-arquitectura) ·
[Endpoints](#-api-integration--endpoints) ·
[Deploy](#-deployment)

</div>

---

## 📚 Tabla de Contenidos

- [📌 Descripción](#-descripción)
- [✅ Características](#-características)
- [🧠 Stack Tecnológico](#-stack-tecnológico)
- [⚡ Inicio Rápido](#-inicio-rápido)
- [🧩 Arquitectura](#-arquitectura)
- [🗂️ Estructura del Proyecto](#-estructura-del-proyecto)
- [🧱 Componentes / Módulos Principales](#-componentes--módulos-principales)
- [🧪 Validaciones](#-validaciones)
- [🔌 API Integration / Endpoints](#-api-integration--endpoints)
- [📜 Scripts Disponibles](#-scripts-disponibles)
- [🔐 Variables de Entorno](#-variables-de-entorno)
- [🚀 Deployment](#-deployment)
- [🧭 Guías de Uso](#-guías-de-uso)
- [🧩 Personalización / Extensión](#-personalización--extensión)
- [🤝 Contribuciones](#-contribuciones)
- [📄 Licencia](#-licencia)

---

## 📌 Descripción

Aplicación frontend SPA para explorar personajes de la **Rick and Morty API**. Permite buscar por nombre, limitar la cantidad de resultados, almacenar favoritos en `localStorage` y navegar con animaciones fluidas. Está pensada para usuarios que desean descubrir personajes rápidamente y guardar listas personalizadas sin registro.

---

## ✅ Características

- ✅ Búsqueda por nombre con límite configurable (1 a 20).
- ✅ Renderizado responsivo con Tailwind CSS directamente en componentes.
- ✅ Favoritos persistentes en `localStorage` con panel lateral.
- ✅ Animaciones de entrada/salida con Framer Motion.
- ✅ Toasts de éxito y error con `react-toastify`.
- ✅ Manejo de estados: carga, vacío, error y resultados.

---

## 🧠 Stack Tecnológico

| Tecnología | Propósito |
| --- | --- |
| React 19 | UI declarativa y estado global de la vista |
| Vite 7 | Bundler rápido para desarrollo y build |
| Tailwind CSS 4 | Estilos utilitarios y diseño responsive |
| Axios | Cliente HTTP con manejo de errores consistente |
| Framer Motion | Animaciones y transiciones |
| React Toastify | Notificaciones no intrusivas |
| @fontsource/bangers | Tipografía temática |

---

## ⚡ Inicio Rápido

### Prerrequisitos

- Node.js 18+ (recomendado)
- npm 9+ o pnpm/yarn equivalente

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

### Build de producción

```bash
npm run build
```

### Previsualización local

```bash
npm run preview
```

---

## 🧩 Arquitectura

**Patrones utilizados**
- Composición de componentes y hooks personalizados.
- Separación de UI, estado y side effects (API + persistencia).
- UI declarativa con estados de carga/éxito/error.

**Flujo de datos (ASCII)**

```
Usuario
  |
  v
SearchForm ──▶ App (estado central) ──▶ Axios ▶ Rick and Morty API
   ^                |     |    |
   |                |     |    └── Toasts (éxito/error)
   |                |     └────── Favoritos (useFavorites + localStorage)
   |                └──────────── Render de tarjetas / empty / skeleton
   └────────────────────────────── Cambios de filtros (query/limit)
```

---

## 🗂️ Estructura del Proyecto

```
.
├─ public/
├─ src/
│  ├─ components/
│  │  ├─ CharacterCard.jsx
│  │  ├─ EmptyState.jsx
│  │  ├─ FavoritesPanel.jsx
│  │  ├─ HeartButton.jsx
│  │  ├─ SearchForm.jsx
│  │  ├─ SkeletonCard.jsx
│  │  └─ StatusBadge.jsx
│  ├─ hooks/
│  │  └─ useFavorites.js
│  ├─ App.jsx
│  ├─ index.css
│  └─ main.jsx
├─ index.html
├─ vite.config.js
└─ package.json
```

---

## 🧱 Componentes / Módulos Principales

| Módulo | Rol |
| --- | --- |
| `App.jsx` | Orquesta estado, búsqueda, resultados y favoritos |
| `SearchForm.jsx` | Formulario de búsqueda y límite |
| `CharacterCard.jsx` | Tarjeta con datos del personaje y favorito |
| `FavoritesPanel.jsx` | Sidebar con favoritos persistidos |
| `useFavorites.js` | Hook para `localStorage` y toggles |
| `SkeletonCard.jsx` | UI de carga |
| `EmptyState.jsx` | Estado vacío con animación |

---

## 🧪 Validaciones

- **Inputs controlados** para nombre y cantidad.
- **Rango acotado (1-20)** con `min`, `max` y normalización interna (`clamp`).
- **Prevención de submit** vacío (se permite búsqueda global sin texto).
- **Errores de API** con mensajes claros y fallback de estado vacío.

---

## 🔌 API Integration / Endpoints

**Base URL**
`https://rickandmortyapi.com/api`

**Endpoints utilizados**

| Método | Endpoint | Descripción | Params |
| --- | --- | --- | --- |
| GET | `/character` | Lista de personajes | `name` (opcional) |

**Ejemplo de petición**

```http
GET /api/character?name=rick
Host: rickandmortyapi.com
```

**Modelo de datos (TypeScript)**

```ts
type Character = {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  image: string;
  origin?: { name: string };
};
```

---

## 📜 Scripts Disponibles

| Script | Descripción |
| --- | --- |
| `npm run dev` | Levanta Vite en modo desarrollo |
| `npm run build` | Genera build optimizado |
| `npm run preview` | Previsualiza el build local |

---

## 🔐 Variables de Entorno

Actualmente **no se requieren variables de entorno** para ejecutar el proyecto.

| Variable | Descripción | Requerida |
| --- | --- | --- |
| N/A | Configuración directa en código | No |

**Ejemplo `.env`**

```env
# Este proyecto no necesita variables de entorno por defecto.
# Si deseas parametrizar la API en el futuro, puedes agregar:
# VITE_RM_API_BASE_URL=https://rickandmortyapi.com/api
```

---

## 🚀 Deployment

**Servicio recomendado:** Netlify

**Pasos sugeridos**
1. Conecta el repositorio en Netlify.
2. Configura `build command` como `npm run build`.
3. Configura `publish directory` como `dist`.
4. Despliega y verifica el dominio.

---

## 🧭 Guías de Uso

1. Escribe un nombre (opcional) y define la cantidad de resultados.
2. Presiona **Buscar** para consultar la API.
3. Marca personajes con el botón de corazón para guardarlos.
4. Abre el panel lateral **Ver favoritos** para revisar y eliminar.

<details>
  <summary>Notas de UX</summary>

  - El panel de favoritos usa overlay para facilitar el foco.
  - Las tarjetas hacen hover con micro-rotación para enfatizar interacción.
</details>

---

## 🧩 Personalización / Extensión

- Ajusta paleta y sombras en los estilos de Tailwind (clases en componentes).
- Cambia el límite máximo en `clampLimit` si necesitas más resultados.
- Añade filtros extra (status, especie) reutilizando el formulario.

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si deseas colaborar:

1. Crea un fork y una rama con el cambio.
2. Mantén el estilo de UI y la organización por componentes.
3. Describe claramente el objetivo del PR.

---

## 📄 Licencia

MIT

---

<div align="center">

Hecho con portales, React y mucho caos interdimensional.  
[Volver arriba](#-buscador-de-personajes-rick--morty)

</div>
