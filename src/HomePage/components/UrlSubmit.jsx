import { useState } from 'react'

export default function UrlSubmit() {

    const [urlForm, setUrlForm] = useState({ originalUrl: '' })

    const apiEndpoint = 'https://url-shortener-1x3f.onrender.com/'

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            const response = await fetch(apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
                },
                body: JSON.stringify(urlForm)
            })

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