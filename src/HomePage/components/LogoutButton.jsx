import useAuth from '../../contexts/AuthContext'
import { apiService } from '../../services/ApiService'

export default function LogoutButton() {
    const { logout, isRecruiter } = useAuth()

    async function handleLogout() {
        if (isRecruiter) {
            try {
                await apiService.recruiterLogout()
            } catch (error) {
                console.log(error)
            }
        }
        logout()
    }

    return (
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
    )
}