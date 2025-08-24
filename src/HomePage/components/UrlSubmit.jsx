import { useState } from 'react'
import { apiService } from '../../services/ApiService'

export default function UrlSubmit() {

    const [urlForm, setUrlForm] = useState({ originalUrl: '' })

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            const response = await apiService.submitUrl(urlForm)

            const data = await response.json()

            if (!response.ok) throw new Error(data.message || 'An error ocurred on submit url task')

        } catch (error) {
            console.log(error.message)
        }
    }

    function handleChange(e) {
        const { id, value } = e.target
        setUrlForm(prev => ({ ...prev, [id]: value }))
    }


    return (<div className="url-submit">
        <form className="url-form" onSubmit={handleSubmit}>
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
    </div>)
}