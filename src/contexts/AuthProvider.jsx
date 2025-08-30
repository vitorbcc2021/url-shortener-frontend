import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './AuthContext'

export default function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        const token = sessionStorage.getItem('jwtToken')
        return !!token
    })

    const [isRecruiter, setIsRecruiter] = useState(false)

    const navigate = useNavigate()

    function login(token, recruiter = false) {
        if (recruiter) setIsRecruiter(true)

        sessionStorage.setItem('jwtToken', token)
        setIsLoggedIn(true)
        navigate('/')
    }

    function logout() {
        if (isRecruiter) setIsRecruiter(false)

        sessionStorage.removeItem('jwtToken')
        setIsLoggedIn(false)
        navigate('/login')
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, isRecruiter, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
