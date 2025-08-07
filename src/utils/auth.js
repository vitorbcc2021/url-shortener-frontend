export function isAuthenticated() {
    const token = localStorage.getItem('jwtToken')

    if (!token) return false

    try {
        const payload = JSON.parse(atob(token.split('.')[1]))

        if ((payload['exp'] * 1000) > Date.now())
            return true

        return false
    }
    catch (error) {
        console.log('Failed to read jwt token!: ' + error)
        return false
    }
}

export function getUserInfo() {
    const token = localStorage.getItem('jwtToken')

    if(!token) return false

    try {
        const payload = JSON.parse(atob(token.split('.')[1]))
        
        const userInfo = {username: payload['username'], role: payload['role']}

        return userInfo
    }
    catch (error) {
        console.log('Failed to get user data: ' + error)
    }
}