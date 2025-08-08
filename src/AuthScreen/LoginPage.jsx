import AuthLayout from './AuthLayout'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const navigate = useNavigate()

  const handleSuccess = (data) => {
    localStorage.setItem('jwtToken', data.token)
    navigate('/')
  }

  return (
    <AuthLayout
      title="Login"
      footerLink="/register"
      footerText="Not registered?"
      submitText="Entrar"
      apiEndpoint="https://url-shortener-1x3f.onrender.com/auth/login"
      onSuccess={handleSuccess}
      fields={[
        { id: 'username', label: 'Username', type: 'text', required: true },
        { id: 'password', label: 'Password', type: 'password', required: true }
      ]}
    />
  )
}