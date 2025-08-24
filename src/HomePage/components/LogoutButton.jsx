import useAuth from '../../contexts/AuthContext'

export default function LogoutButton() {
    const { logout } = useAuth()

    return (
        <button className="logout-btn" onClick={logout}>Logout</button>
    )
}