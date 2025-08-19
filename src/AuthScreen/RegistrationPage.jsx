import AuthLayout from './AuthLayout'

export default function RegistrationPage() {
  return (
    <AuthLayout
      title="Registration"
      footerLink="/login"
      footerText="Already registered?"
      submitText="Cadastrar"
      apiEndpoint="https://url-shortener-1x3f.onrender.com/auth/register"
      fields={[
        { id: 'username', label: 'Username', type: 'text', required: true },
        { id: 'password', label: 'Password', type: 'password', required: true },
        { id: 'confirmPassword', label: 'Confirm Password', type: 'password', required: true }
      ]}
    />
  )
}