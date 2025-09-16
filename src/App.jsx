import RegistrationPage from './views/AuthScreen/RegistrationPage'
import LoginPage from './views/AuthScreen/LoginPage'
import HomePage from './views/HomePage/HomePage'
import { Routes, Route } from 'react-router-dom'
import { ProtectedRoute } from './utils/ProtectedRoute'

export default function App() {
  return (
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
      </Routes>
  )
}