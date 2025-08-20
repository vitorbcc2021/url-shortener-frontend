import { LOGIN_URL } from '../variables'
import AuthLayout from './AuthLayout'

export default function LoginPage() {
  return (
    <AuthLayout
      title="Login"
      footerLink="/register"
      footerText="Not registered?"
      submitText="Entrar"
      apiEndpoint={LOGIN_URL}
      fields={[
        { id: 'username', label: 'Username', type: 'text', required: true },
        { id: 'password', label: 'Password', type: 'password', required: true }
      ]}
    />
  )
}