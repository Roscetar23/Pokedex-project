# 🎮 Pokédex Retro

Una Pokédex interactiva con diseño retro inspirado en los juegos clásicos de Pokémon. Construida con React, TypeScript y Vite, esta aplicación te permite explorar información detallada de todos los Pokémon con un estilo visual nostálgico de 8-bits.

![Pokédex Preview](https://img.shields.io/badge/Status-Active-success)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)
![React](https://img.shields.io/badge/React-19.2.0-61dafb)
![Vite](https://img.shields.io/badge/Vite-7.3.1-646cff)

## ✨ Características

### 🔍 Búsqueda de Pokémon
- Busca cualquier Pokémon por nombre
- Interfaz de búsqueda estilo juego retro
- Manejo de errores amigable

### 📊 Información Detallada
- **Estadísticas básicas**: Altura, peso, número de Pokédex
- **Tipos**: Visualización con badges de colores oficiales
- **Debilidades**: Análisis automático de tipos
- **Habilidades**: Lista completa de habilidades del Pokémon
- **Cadena evolutiva**: Navegación interactiva entre evoluciones

### 🗺️ Mapas de Región
- Visualización de la región de origen
- Información de generación y hábitat
- Mapas estilizados de todas las regiones (Kanto, Johto, Hoenn, etc.)
- Alternancia entre vista de imágenes y mapa

### 🎨 Diseño Retro
- Interfaz inspirada en la Pokédex clásica
- Fuente pixelada "Press Start 2P"
- Controles estilo Game Boy (D-pad, botones)
- Pantalla verde retro con información
- Animaciones y efectos nostálgicos

### 🖼️ Galería de Imágenes
- Artwork oficial
- Sprites frontales y traseros
- Versiones shiny
- Carrusel interactivo con controles

## 🚀 Tecnologías

- **React 19.2.0** - Biblioteca de UI
- **TypeScript 5.9.3** - Tipado estático
- **Vite 7.3.1** - Build tool y dev server
- **PokeAPI** - API de datos de Pokémon
- **CSS3** - Estilos y animaciones
- **Google Fonts** - Fuentes Press Start 2P y Fira Sans Condensed

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone <tu-repositorio>
cd pokedex
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

## 🎮 Uso

1. **Buscar un Pokémon**: Escribe el nombre en la barra de búsqueda y presiona "Busca"
2. **Ver imágenes**: Usa las flechas o el D-pad para navegar entre sprites
3. **Ver mapa**: Presiona el botón ▲ (arriba) del D-pad para alternar entre imágenes y mapa
4. **Explorar evoluciones**: Haz clic en cualquier Pokémon de la cadena evolutiva para buscarlo

## 🏗️ Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── AbilityBadge.tsx
│   ├── EmptyState.tsx
│   ├── ErrorState.tsx
│   ├── EvolutionChain.tsx
│   ├── ImageCarousel.tsx
│   ├── PokedexControls.tsx
│   ├── PokedexHeader.tsx
│   ├── PokemonInfo.tsx
│   ├── PokemonState.tsx
│   ├── RegionMap.tsx
│   ├── SearchBar.tsx
│   └── TypeBadge.tsx
├── pages/              # Páginas principales
│   ├── Home.tsx
│   └── PokemonDetails.tsx
├── services/           # Servicios de API
│   └── pokeApi.ts
├── interface/          # Interfaces TypeScript
│   └── generalInterfaces.ts
├── fonts/             # Fuentes personalizadas
├── App.tsx            # Componente principal
├── main.tsx           # Punto de entrada
├── App.css            # Estilos principales
└── index.css          # Estilos globales
```

## 🎨 Características de Diseño

### Lado Izquierdo (Información)
- Fondo gris oscuro con gradiente
- Barra de búsqueda estilo retro
- Tarjetas con información del Pokémon
- Badges de tipos con colores oficiales
- Fuente pixelada para todo el texto

### Lado Derecho (Pokédex)
- Diseño inspirado en la Pokédex clásica
- Luces indicadoras (azul grande, roja, amarilla, verde)
- Pantalla principal con borde negro
- Controles funcionales (D-pad, botones)
- Pantalla secundaria verde con información

## 🔧 Scripts Disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Construye para producción
npm run preview  # Preview de la build de producción
npm run lint     # Ejecuta ESLint
```

## 🌐 API

Este proyecto utiliza [PokeAPI](https://pokeapi.co/) para obtener toda la información de los Pokémon:
- Datos básicos del Pokémon
- Información de tipos y debilidades
- Cadenas evolutivas
- Información de especies y regiones

## 📝 Notas de Desarrollo

- Arquitectura modular con componentes reutilizables
- TypeScript para type safety completo
- Manejo de estados con React Hooks
- Llamadas asíncronas a la API con async/await
- Manejo de errores robusto
- Diseño responsive (optimizado para desktop)

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si encuentras algún bug o tienes alguna sugerencia:

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 🙏 Agradecimientos

- **PokeAPI** - Por proporcionar una API completa y gratuita
- **Nintendo/Game Freak** - Por crear el universo Pokémon
- **Bulbagarden** - Por los recursos de mapas de regiones
- **Kiro AI** - Por la asistencia en el desarrollo y arquitectura del código

## 👨‍💻 Autor

Desarrollado con ❤️ y nostalgia por los juegos clásicos de Pokémon.

---

⭐ Si te gusta este proyecto, no olvides darle una estrella en GitHub!
