import { Link } from 'react-router-dom'
import './AuthLayout.css'
import { useState } from 'react'

export default function AuthLayout({
    title,
    footerLink,
    footerText,
    submitText,
    apiEndpoint,
    fields,
    onSuccess
}) {
    const [formData, setFormData] = useState({username: '', password: ''})
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { id, value } = e.target
        setFormData(prev => ({ ...prev, [id]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        try {
            const response = await fetch(apiEndpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })

            const data = await response.json()

            if (!response.ok) throw new Error(data.message || 'Erro na autenticação')

            onSuccess(data)

        } catch (err) {
            setError(err.message)
            console.log(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <h1>Url Shortener</h1>
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

                    <div className="auth-footer">
                        <Link to={footerLink}>{footerText}</Link>
                    </div>

                    <button type='submit' className='submit-btn' disabled={loading}>
                        {loading ? 'Carregando...' : submitText}
                    </button>
                </form>
            </div>
        </>
    )
}