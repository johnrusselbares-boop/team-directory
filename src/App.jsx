
import { useEffect, useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Users from './pages/Users'
import UserDetails from './pages/UserDetails'
import About from './pages/About'
import NotFound from './pages/NotFound'

function AppContent() {
  const [favorites, setFavorites] = useState([])
  const [darkMode, setDarkMode] = useState(false)

  const location = useLocation()

  useEffect(() => {
    const titles = {
      '/': 'Home',
      '/users': 'Team Directory',
      '/about': 'About',
    }

    const title =
      titles[location.pathname] ||
      (location.pathname.startsWith('/users/')
        ? 'Team Member Profile'
        : 'Page Not Found')

    document.title = `${title} | TeamSpace`
  }, [location.pathname])

  useEffect(() => {
    document.documentElement.classList.toggle(
      'dark',
      darkMode,
    )
  }, [darkMode])

  function toggleFavorite(userId) {
    setFavorites((currentFavorites) =>
      currentFavorites.includes(userId)
        ? currentFavorites.filter((id) => id !== userId)
        : [...currentFavorites, userId],
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={() =>
          setDarkMode((current) => !current)
        }
        favoriteCount={favorites.length}
      />

      <main className="mx-auto min-h-[75vh] max-w-7xl px-5 py-8 sm:py-12 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/users"
            element={
              <Users
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
              />
            }
          />

          <Route
            path="/users/:id"
            element={
              <UserDetails
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
              />
            }
          />

          <Route path="/about" element={<About />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="border-t border-gray-200 bg-white px-5 py-7 text-center text-sm text-gray-500 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400">
        <p className="font-semibold text-gray-700 dark:text-gray-200">
          TeamSpace
        </p>
        <p className="mt-2">
          A React Team Directory Laboratory Project
        </p>
        <p className="mt-1">
          Built with React, Vite, Tailwind CSS, and React Router.
        </p>
      </footer>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}
