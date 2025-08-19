import AuthLayout from './AuthLayout'

export default function LoginPage() {
  return (
    <AuthLayout
      title="Login"
      footerLink="/register"
      footerText="Not registered?"
      submitText="Entrar"
      apiEndpoint="https://url-shortener-1x3f.onrender.com/auth/login"
      fields={[
        { id: 'username', label: 'Username', type: 'text', required: true },
        { id: 'password', label: 'Password', type: 'password', required: true }
      ]}
    />
  )
}