import useAuth from '../../utils/use-auth'

export default function LogoutButton() {
    const { logout } = useAuth()

    return (
        <button className="logout-btn" onClick={logout}>Logout</button>
    )
}