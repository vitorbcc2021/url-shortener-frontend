import { GENERAL_URL, RECRUITER_LOGIN, RECRUITER_LOGOUT } from '../variables'

export const apiService = {
    async auth(apiEndpoint, formData) {
        const response = await fetch(apiEndpoint, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(formData)
        })

        if (!response.ok) throw new Error('Authentication error!')

        const data = await response.json()

        return data.token
    },

    async recruiterLogin() {
        const response = await fetch(RECRUITER_LOGIN, {
            method: 'GET'
        })

        if (!response.ok) throw new Error('Failed on access the website as a recruiter!')

        const data = await response.json()

        return data.token
    },

    async recruiterLogout() {
        const token = sessionStorage.getItem('jwtToken')
        const response = await fetch(RECRUITER_LOGOUT, {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${token}` }
        })

        if(!response.ok) throw new Error('Error on delete Recruiter URLs!!!')

    },

    async submitUrl(url) {
        const token = sessionStorage.getItem('jwtToken')
        const response = await fetch(`${GENERAL_URL}/`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(url)
        })

        if (!response.ok) throw new Error('An error ocurred on url submit task')

        return await response.json()
    },

    async getUrls() {
        const token = sessionStorage.getItem('jwtToken')
        const response = await fetch(`${GENERAL_URL}/urls`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        return await response.json()
    },

    async deleteUrl(urlId) {
        const token = sessionStorage.getItem('jwtToken')
        const response = await fetch(`${GENERAL_URL}/${urlId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        if (!response.ok) throw new Error('An error ocurred on DeleteUrl task!!!')

        return
    },

    async updateUrl(urlId, updatedData) {
        const token = sessionStorage.getItem('jwtToken')
        const response = await fetch(`${GENERAL_URL}/${urlId}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ newUrl: updatedData })
        })

        if (!response.ok) throw new Error('Failed at update url!!')

        return await response.json()
    }
}