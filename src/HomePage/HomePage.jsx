import './HomePage.css'
import LogoutButton from './components/LogoutButton'
import UrlList from './components/UrlList'
import UrlSubmit from './components/UrlSubmit'
import { useEffect, useState } from 'react'
import useAuth from '../utils/AuthContext'
import { GET_URL_LIST } from '../variables'

export default function HomePage() {
    const [urls, setUrls] = useState([])
    const { isLoggedIn } = useAuth()

    useEffect(() => {
        async function fetchUrls() {
            const token = localStorage.getItem('jwtToken')
            const response = await fetch(GET_URL_LIST, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            if (response.ok) {
                const data = await response.json()
                setUrls(data)
            } else {
                setUrls([])
            }
        }

        if (isLoggedIn) {
            fetchUrls()
        }
    }, [isLoggedIn])

    return (
        <div className="home-container">

            <h1>Url Shortener</h1>

            <div className="logout-container">
                <LogoutButton />
            </div>

            <UrlSubmit />

            <UrlList urls={urls} />

        </div>
    )
}