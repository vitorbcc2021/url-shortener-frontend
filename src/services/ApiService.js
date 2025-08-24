import { GENERAL_URL } from '../variables'

export const apiService = {
    async auth(apiEndpoint, formData) {
        const response = await fetch(apiEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })

        return response
    },

    async submitUrl(url) {
        const token = localStorage.getItem('jwtToken')
        const response = await fetch(`${GENERAL_URL}/`, {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(url)
        })

        return response
    },

    async getUrls() {
        const token = localStorage.getItem('jwtToken')
        const response = await fetch(`${GENERAL_URL}/urls`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        return response
    },

    async deleteUrl(urlId) {
        const token = localStorage.getItem('jwtToken')
        const response = await fetch(`${GENERAL_URL}/${urlId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        return response
    },

    async updateUrl(urlId, updatedData) {
        const token = localStorage.getItem('jwtToken')
        const response = await fetch(`${GENERAL_URL}/${urlId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(updatedData)
        })

        return response
    }
}