import { REGISTER_URL } from '../variables'
import AuthLayout from './AuthLayout'

export default function RegistrationPage() {
  return (
    <AuthLayout
      title="Registration"
      footerLink="/login"
      footerText="Already registered?"
      submitText="Cadastrar"
      apiEndpoint={REGISTER_URL}
      fields={[
        { id: 'username', label: 'Username', type: 'text', required: true },
        { id: 'password', label: 'Password', type: 'password', required: true },
        { id: 'confirmPassword', label: 'Confirm Password', type: 'password', required: true }
      ]}
    />
  )
}