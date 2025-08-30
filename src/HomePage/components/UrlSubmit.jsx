import { useState } from 'react'
import { apiService } from '../../services/ApiService'

export default function UrlSubmit({ onUrlCreated }) {
    const [urlForm, setUrlForm] = useState({ originalUrl: '' })

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            const newUrl = await apiService.submitUrl(urlForm)

            onUrlCreated?.(newUrl)
            setUrlForm({ originalUrl: '' })
            alert('URL criada com sucesso!')

        } catch (error) {
            console.log(error.message)
            alert(error.message)
        }
    }

    function handleChange(e) {
        const { id, value } = e.target
        setUrlForm(prev => ({ ...prev, [id]: value }))
    }

    return (
        <div className="url-submit">
            <form className="url-form" onSubmit={handleSubmit}>
                <label htmlFor="originalUrl">Insert your URL here:</label>
                <input
                    id="originalUrl"
                    type="text"
                    onChange={handleChange}
                    required
                    value={urlForm['originalUrl'] || ''}
                    placeholder='ex:www.meu-site.com...'
                />
                <button className="submit-url-btn" type="submit">submit</button>
            </form>
        </div>
    )
}