⚛️ JSONFeed React
Aplicación SPA desarrollada con React 19 y Vite que consume datos desde la API pública de JSONPlaceholder y los muestra en una interfaz moderna y minimalista.
📌 Descripción
JSONFeed React es una Single Page Application que obtiene publicaciones reales desde https://jsonplaceholder.typicode.com/posts y las presenta en dos vistas:

Home (/): Hero con nombre del proyecto, descripción y listado de publicaciones.
Entities (/entities): Tabla completa con propiedades id, userId, title y body.

🛠️ Tecnologías usadas
TecnologíaVersiónReact19Vite8React Router DOM7Axios1Tailwind CSS4Shadcn/uilatest
🚀 Pasos para ejecutar el proyecto

Clona el repositorio:

git clone https://github.com/anali-salvador/jsonfeed-react.git

Entra a la carpeta:

cd jsonfeed-react

Instala las dependencias:

npm install

Inicia el servidor de desarrollo:

npm run dev

Abre en el navegador:

http://localhost:5173
🌐 Deploy
🔗 Ver aplicación desplegada
🎥 Video demostrativo
🎬 Ver video en YouTube
📁 Estructura del proyecto
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
👩‍💻 Autora
Anali Salvador — @anali-salvador