import RegistrationPage from './AuthScreen/RegistrationPage'
import LoginPage from './AuthScreen/LoginPage'
import HomePage from './HomePage/HomePage'
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