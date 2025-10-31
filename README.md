# 🚀 Portafolio Personal - Felipe Norambuena

Portafolio personal moderno, minimalista y tecnológico desarrollado con React.js, Vite y Tailwind CSS.

![React](https://img.shields.io/badge/React-19.1.1-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.13-38B2AC?logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.5.4-FF0055?logo=framer)

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz minimalista y profesional con animaciones suaves
- 🌓 **Tema Claro/Oscuro**: Sistema de temas con detección automática de preferencias del sistema
- 📱 **Responsive**: Completamente adaptable a móviles, tablets y escritorio
- ⚡ **Alto Rendimiento**: Construido con Vite para desarrollo y build ultra-rápidos
- 🎭 **Animaciones**: Animaciones scroll-triggered con Framer Motion
- 📧 **Formulario de Contacto**: Integración con EmailJS para envío de mensajes
- 🔗 **Scroll Suave**: Navegación fluida entre secciones

## 🛠️ Tecnologías Utilizadas

- **Framework**: React.js 19.1.1
- **Build Tool**: Vite 7.1.7
- **Estilos**: Tailwind CSS 3.4.13
- **Animaciones**: Framer Motion 11.5.4
- **Formulario**: EmailJS (@emailjs/browser 4.4.1)
- **Íconos**: React Icons 5.3.0
- **Gestión de Estado**: Context API de React

## 📦 Instalación

### Prerrequisitos

- Node.js 18+ y npm/yarn instalados

### Pasos de Instalación

1. **Clonar el repositorio** (o descargar el código)

```powershell
git clone <url-del-repositorio>
cd Portafolio
```

2. **Instalar dependencias**

```powershell
npm install
```

3. **Iniciar el servidor de desarrollo**

```powershell
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

## 🔧 Configuración

### 1. Configurar EmailJS

Para que el formulario de contacto funcione correctamente:

1. Crea una cuenta gratuita en [EmailJS](https://www.emailjs.com/)
2. Crea un servicio de email (Gmail, Outlook, etc.)
3. Crea una plantilla de email con las siguientes variables:
   - `{{from_name}}` - Nombre del remitente
   - `{{from_email}}` - Email del remitente
   - `{{message}}` - Mensaje
   - `{{to_email}}` - Tu email (felipeignacionc24@gmail.com)

4. Edita el archivo `src/components/Contact.jsx` y reemplaza:

```javascript
const SERVICE_ID = 'YOUR_SERVICE_ID';      // Tu Service ID de EmailJS
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';    // Tu Template ID de EmailJS
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';      // Tu Public Key de EmailJS
```

### 2. Agregar CV

Coloca tu archivo PDF de CV en la carpeta `public/` con el nombre `CVFelipeNorambuena.pdf`.

```
public/
  └── CVFelipeNorambuena.pdf
```

El botón "Descargar CV" en la sección "Sobre Mí" descargará automáticamente este archivo.

### 3. Actualizar URLs de Redes Sociales

Edita los siguientes archivos para agregar tus URLs reales:

**Footer.jsx** - Líneas ~12-22:
```javascript
const socialLinks = [
  {
    name: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com/tu-usuario', // ← Actualizar aquí
    color: 'hover:text-slate-900 dark:hover:text-white',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    url: 'https://linkedin.com/in/tu-perfil', // ← Actualizar aquí
    color: 'hover:text-blue-600 dark:hover:text-blue-400',
  },
];
```

### 4. Actualizar URLs de Proyectos

Edita `src/components/Projects.jsx` y actualiza las URLs de GitHub de tus proyectos:

```javascript
const projects = [
  {
    id: 1,
    title: 'Sistema de Gestión Turística',
    // ...
    github: 'https://github.com/tu-usuario/proyecto-1', // ← Actualizar aquí
  },
  // ... más proyectos
];
```

### 5. Agregar Logos de Tecnologías (Opcional)

En `src/components/About.jsx`, reemplaza los placeholders con imágenes o componentes de logos de las tecnologías que manejas (React, Spring Boot, SQL, etc.).

## 🎨 Paleta de Colores

### Tema Claro
- Fondo: `#f8fafc` (Slate 50)
- Texto: `#0f172a` (Slate 900)
- Acento: `#0369a1` (Sky 700)
- Bordes: `#cbd5e1` (Slate 300)

### Tema Oscuro
- Fondo: `#0f172a` (Slate 900)
- Texto: `#f1f5f9` (Slate 100)
- Acento: `#38bdf8` (Sky 400)
- Bordes: `#334155` (Slate 700)

## 📝 Scripts Disponibles

```powershell
# Modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa del build de producción
npm run preview

# Ejecutar linter
npm run lint
```

## 🚀 Despliegue

### Compilar para Producción

```powershell
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`.

### Opciones de Despliegue

- **Vercel**: `npm install -g vercel && vercel`
- **Netlify**: Arrastra la carpeta `dist/` a [Netlify Drop](https://app.netlify.com/drop)
- **GitHub Pages**: Usa [gh-pages](https://www.npmjs.com/package/gh-pages)

## 📂 Estructura del Proyecto

```
Portafolio/
├── public/
│   └── CVFelipeNorambuena.pdf    # Tu CV (agregar aquí)
├── src/
│   ├── assets/                   # Imágenes y recursos
│   ├── components/
│   │   ├── Navbar.jsx           # Barra de navegación
│   │   ├── Hero.jsx             # Sección Hero/Inicio
│   │   ├── About.jsx            # Sección Sobre Mí
│   │   ├── Projects.jsx         # Sección Proyectos
│   │   ├── Contact.jsx          # Sección Contacto
│   │   └── Footer.jsx           # Pie de página
│   ├── context/
│   │   └── ThemeContext.jsx     # Contexto para tema claro/oscuro
│   ├── App.jsx                  # Componente principal
│   ├── main.jsx                 # Punto de entrada
│   └── index.css                # Estilos globales con Tailwind
├── tailwind.config.js           # Configuración de Tailwind
├── postcss.config.js            # Configuración de PostCSS
├── vite.config.js               # Configuración de Vite
└── package.json                 # Dependencias del proyecto
```

## 🌟 Secciones del Portafolio

1. **Hero/Inicio**: Presentación impactante con nombre y título
2. **Sobre Mí**: Información personal, botón de descarga de CV y espacio para logos de tecnologías
3. **Proyectos**: Tarjetas de 3 proyectos destacados con tecnologías y enlaces
4. **Contacto**: Formulario con EmailJS, botón de WhatsApp y email directo
5. **Footer**: Enlaces a redes sociales y copyright

## 🐛 Solución de Problemas

### Errores de CSS/Tailwind al compilar

Si ves errores relacionados con `@tailwind` o `@apply`, asegúrate de que PostCSS y Tailwind estén correctamente instalados:

```powershell
npm install -D tailwindcss postcss autoprefixer
```

### EmailJS no envía correos

1. Verifica que las credenciales en `Contact.jsx` sean correctas
2. Revisa que la plantilla de EmailJS tenga las variables correctas
3. Comprueba la consola del navegador para errores específicos

### Tema oscuro no funciona

El tema se aplica mediante la clase `dark` en el elemento `<html>`. Verifica que:
- El `ThemeContext` esté envolviendo la app en `main.jsx`
- La configuración de Tailwind tenga `darkMode: 'class'`

## 📧 Contacto

- **Email**: felipeignacionc24@gmail.com
- **WhatsApp**: +56 9 7416 1396

## 📄 Licencia

© 2024 Felipe Norambuena. Todos los derechos reservados.

---

Desarrollado con ❤️ usando React, Vite y Tailwind CSS

