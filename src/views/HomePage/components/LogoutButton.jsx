import useAuth from '../../../contexts/AuthContext'
import { apiService } from '../../../services/ApiService'
import Icon from '../../../components/Icon'

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
        <button className="logout-btn" onClick={handleLogout}>
            <Icon className="logout-icon" name="logout" />
            Logout
        </button>
    )
}