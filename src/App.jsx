import RegistrationPage from './AuthScreen/RegistrationPage'
import LoginPage from './AuthScreen/LoginPage'
import HomePage from './HomePage/HomePage'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import { isAuthenticated } from './utils/auth'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated())

  return (
    <Routes>
      <Route path="/" element={
        isLoggedIn ?
          <HomePage /> : <Navigate to="/login" replace />
      }
      />
      <Route path="/login" element={<LoginPage onLogin={() => setIsLoggedIn(true)} />} />
      <Route path="/register" element={<RegistrationPage />} />
    </Routes>
  )
}