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
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(url)
        })

        if (!response.ok)
            throw new Error('An error ocurred on url submit task')

         return await response.json()
    },

    async getUrls() {
        const token = localStorage.getItem('jwtToken')
        const response = await fetch(`${GENERAL_URL}/urls`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        return await response.json()
    },

    async deleteUrl(urlId) {
        const token = localStorage.getItem('jwtToken')
        const response = await fetch(`${GENERAL_URL}/${urlId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        if(!response.ok)
            throw new Error('An error ocurred on DeleteUrl task!!!')
        
        return
    },

    async updateUrl(urlId, updatedData) {
        const token = localStorage.getItem('jwtToken')
        const response = await fetch(`${GENERAL_URL}/${urlId}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ newUrl: updatedData })
        })

        if(!response.ok)
            throw new Error('Failed at update url!!')

        return await response.json()
    }
}