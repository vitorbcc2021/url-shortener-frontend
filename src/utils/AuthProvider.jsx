import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './AuthContext'

export default function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        const token = localStorage.getItem('jwtToken')
        return !!token
    })

    const navigate = useNavigate()

    function login(token) {
        localStorage.setItem('jwtToken', token)
        setIsLoggedIn(true)
        navigate('/')
    }

    function logout() {
        localStorage.removeItem('jwtToken')
        setIsLoggedIn(false)
        navigate('/login')
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
