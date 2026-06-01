# ⚛️ JSONFeed React

Aplicación SPA desarrollada con **React 19** y **Vite** que consume datos desde la API pública de JSONPlaceholder y los muestra en una interfaz moderna y minimalista.

## 📌 Descripción

JSONFeed React es una Single Page Application que obtiene publicaciones reales desde `https://jsonplaceholder.typicode.com/posts` y las presenta en dos vistas:

- **Home** (`/`): Hero con nombre del proyecto, descripción y listado de publicaciones.
- **Entities** (`/entities`): Tabla completa con propiedades id, userId, title y body.

## 🛠️ Tecnologías usadas

| Tecnología | Versión |
|---|---|
| React | 19 |
| Vite | 8 |
| React Router DOM | 7 |
| Axios | 1 |
| Tailwind CSS | 4 |
| Shadcn/ui | latest |

## 🚀 Pasos para ejecutar el proyecto

1. Clona el repositorio:

```
git clone https://github.com/anali-salvador/jsonfeed-react.git
```

2. Entra a la carpeta:

```
cd jsonfeed-react
```

3. Instala las dependencias:

```
npm install
```

4. Inicia el servidor de desarrollo:

```
npm run dev
```

5. Abre en el navegador:

```
http://localhost:5173
```

## 🌐 Deploy

🔗 [🔗 [Ver aplicación desplegada](https://jsonfeed-react.vercel.app)]()

## 🎥 Video demostrativo

🎬 [Ver video en YouTube]()

## 📁 Estructura del proyecto

```
src/
├── components/
│   ├── ui/
│   │   ├── button.jsx
│   │   └── card.jsx
│   ├── Navbar.jsx
│   └── PostCard.jsx
├── hooks/
│   └── usePosts.js
├── pages/
│   ├── Home.jsx
│   └── Entities.jsx
└── App.jsx
```

## 👩‍💻 Autora

**Anali Salvador** — [@anali-salvador](https://github.com/anali-salvador)