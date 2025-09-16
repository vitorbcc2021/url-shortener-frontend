import { Link } from 'react-router-dom'
import './AuthLayout.css'
import { useState } from 'react'
import useAuth from '../../contexts/AuthContext'
import { apiService } from '../../services/ApiService'
import Logo from '../../components/Logo'
import Icon from '../../components/Icon'

export default function AuthLayout({
    title,
    footerLink,
    footerText,
    submitText,
    apiEndpoint,
    fields
}) {
    const [formData, setFormData] = useState({ username: '', password: '' })
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const { login } = useAuth()

    function handleChange(e) {
        const { id, value } = e.target
        setFormData(prev => ({ ...prev, [id]: value }))
    }

    async function recruiterLogin() {
        try {
            const token = await apiService.recruiterLogin()
            login(token, true)
        } catch (error) {
            console.log(error)
        }
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        setError('')

        try {
            const token = await apiService.auth(apiEndpoint, formData)
            login(token)
        } catch (err) {
            setError(err.message)
            console.log(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <Logo />

            <div className="auth-container">
                <form className="auth-form" onSubmit={handleSubmit}>
                    <h2>{title}</h2>

                    {error && <div className="error-message">{error}</div>}

                    {fields.map(field => (
                        <div key={field.id} className="auth-form-group">
                            <label htmlFor={field.id}>{field.label}</label>
                            <input
                                id={field.id}
                                type={field.type}
                                required={field.required}
                                value={formData[field.id] || ''}
                                onChange={handleChange}
                            />
                        </div>
                    ))}

                    <button type='submit' className='submit-btn' disabled={loading}>
                        {loading ? 'Carregando...' : submitText}
                    </button>

                    <div className="auth-footer">
                        <button className="recruiter-button" type="button" onClick={recruiterLogin}>
                            <Icon className="recruiter-icon" name='person' />
                            Enter as a Recruiter
                        </button>
                    </div>

                    <div className="register-link">
                        <Link to={footerLink}>{footerText}</Link>
                    </div>

                </form>
            </div>
        </>
    )
}