# TravelTrucks

A modern web application for campervan rental services. This application enables users to browse a catalog of available campers, filter by various criteria, add favorites, and make bookings.

## 🚀 Features

- **Home Page** - Hero section with call-to-action button
- **Catalog** - Browse available campers with advanced filtering
- **Filtering System** - Filter by location, vehicle type, and equipment (AC, kitchen, bathroom, etc.)
- **Favorites** - Save favorite campers to localStorage
- **Detailed View** - Comprehensive camper details with image gallery, reviews, and booking form
- **Booking Form** - Validated booking form with date range selection
- **Load More** - Paginated loading of additional campers
- **Responsive Design** - Desktop-first design with optional mobile responsiveness

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **Redux Toolkit** - State management
- **React Router v7** - Client-side routing
- **Material-UI (MUI)** - Component library
- **Axios** - HTTP client
- **React Hook Form** - Form management
- **Swiper** - Image gallery slider
- **Sass** - CSS preprocessing

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** version 18 or higher
- **npm** or **yarn** package manager

## 🔧 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd TravelTrucks
```

2. Install dependencies:

```bash
npm install
```

or

```bash
yarn install
```

## 🏃 Running the Project

### Development Mode

Start the development server:

```bash
npm run dev
```

or

```bash
yarn dev
```

The application will be available at `http://localhost:5173`

### Production Build

Create a production build:

```bash
npm run build
```

or

```bash
yarn build
```

The built files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

or

```bash
yarn preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Filters/        # Filter components
│   ├── TruckDetail/    # Camper detail page components
│   └── TruckList/      # Camper list components
├── pages/              # Page components
├── store/              # Redux store and slices
│   ├── apis/          # RTK Query API definitions
│   └── slices/        # Redux slices
├── hooks/              # Custom React hooks
├── shared/             # Shared components and utilities
├── styles/             # Styles and design tokens
├── utils/              # Utility functions
├── constants/          # Application constants
└── config/             # Configuration files
```

## 🌐 API Integration

The application uses a mock API backend:

**Base URL:** `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io`

### Endpoints

- `GET /campers` - Get all campers (supports filtering via query parameters)
  - Query parameters: `location`, `form`, `AC`, `automatic`, `kitchen`, `TV`, `bathroom`, `page`, `limit`
- `GET /campers/:id` - Get camper details by ID

## ✨ Key Functionality

- ✅ Home page with hero banner and navigation to catalog
- ✅ Camper catalog with filtering capabilities
- ✅ Multi-criteria filtering (location, vehicle type, equipment)
- ✅ Favorites system with localStorage persistence
- ✅ Detailed camper page with image gallery, reviews, and booking form
- ✅ Validated booking form with success notifications
- ✅ Paginated loading with "Load More" button
- ✅ Opens camper details in new browser tab
- ✅ Loading states for async operations
- ✅ Error handling and user feedback

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Design System

The project uses a custom design system with:

- **Design Tokens** - Colors, spacing, typography, border radius
- **Material-UI Theme** - Customized MUI theme configuration
- **Component Library** - Reusable UI components
