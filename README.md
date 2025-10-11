# Buscador de Personajes

Aplicación React + Vite para explorar personajes de la Rick and Morty API, gestionar favoritos y mostrar notificaciones con `react-toastify`. La configuración de Tailwind sigue el flujo recomendado en la guía oficial (ver `Installing-Tailwind.png`).

## Tecnologías
- React 19 + Vite 7
- Tailwind CSS (via `@tailwindcss/vite`)
- react-toastify
- Fetch API para solicitudes HTTP (mantiene el bundle liviano y ofrece control directo sobre respuestas y errores sin dependencias extra).

## Requisitos cumplidos
- Búsqueda de personajes por nombre y cantidad deseada (1 a 20 resultados).
- Renderizado responsive con Tailwind directamente en los componentes.
- Loader visual, manejo de errores y toasts de éxito/falla.
- Favoritos persistidos en `localStorage` con opciones para ver u ocultar la lista.
- Uso de `useState`, `useEffect`, `useMemo` y promesas con `fetch`.

## Scripts
```bash
npm install
npm run dev
```

## Deploy
Se puede desplegar en Vercel o Netlify ejecutando el build con los mismos scripts de Vite. Agrega aquí el enlace público una vez publicado.

