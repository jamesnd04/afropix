# AfroPix Symposium 2025 Website

A modern React web application with Three.js integration for the AfroPix Symposium 2025 event.

## Features

- 🎨 **Interactive 3D Scene** - Beautiful Three.js animated background with floating geometric shapes
- ⏰ **Live Countdown Timer** - Real-time countdown to February 22, 2025
- 👥 **Executive Board Section** - Showcase of all executive board members
- 📖 **About Page** - Information about the symposium and its mission
- 📅 **Schedule Page** - Complete event schedule with timeline visualization
- 🎨 **Custom Color Palette** - Styled with the provided color scheme

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navigation.jsx   # Main navigation bar
│   ├── Countdown.jsx    # Countdown timer component
│   ├── ThreeScene.jsx   # Three.js 3D scene
│   └── ExecutiveBoard.jsx # Board members section
├── pages/               # Page components
│   ├── Home.jsx         # Home page
│   ├── About.jsx        # About page
│   └── Schedule.jsx     # Schedule page
├── App.jsx              # Main app component with routing
└── main.jsx             # Entry point
```

## Customization

### Adding Executive Board Members

Edit `src/components/ExecutiveBoard.jsx` and update the `boardMembers` array with actual member data and images.

### Updating Schedule

Edit `src/pages/Schedule.jsx` and modify the `schedule` array with your actual event schedule.

### Color Palette

Colors are defined in `src/index.css` as CSS variables:
- Base colors: Deep Charcoal Purple, Soft Lavender Mist, Warm Mauve Gray
- Accent colors: Radiant Violet, Magenta Punch, Amber Glow, Sky Teal

## Technologies Used

- React 18
- React Router DOM
- Three.js
- React Three Fiber
- React Three Drei
- Vite

## License

MIT

