import './HomePage.css'
import LogoutButton from './components/LogoutButton'
import UrlList from './components/UrlList/UrlList'
import UrlSubmit from './components/UrlSubmit'
import { useEffect, useState } from 'react'
import useAuth from '../contexts/AuthContext'
import { apiService } from '../services/ApiService'

export default function HomePage() {

    const [urls, setUrls] = useState([])
    const { isLoggedIn } = useAuth()


    function handleUrlDeleted(deletedUrlId) {
        setUrls(prevUrls => prevUrls.filter(url => url._id !== deletedUrlId))
    }

    function handleUrlEdited(updatedUrl) {
        setUrls(prevUrls => prevUrls.map(url => url._id === updatedUrl._id ? updatedUrl : url))
    }


    useEffect(() => {
        async function fetchUrls() {
            try {
                const response = await apiService.getUrls()
    
                if (response.ok) {
                    const data = await response.json()
                    setUrls(data)
                } else {
                    setUrls([])
                }
            } catch (error) {
                console.log(error)
            }
        }

        if (isLoggedIn) fetchUrls()
            
    }, [isLoggedIn])


    return (
        <div className="home-container">

            <h1>Url Shortener</h1>

            <div className="logout-container">
                <LogoutButton />
            </div>

            <UrlSubmit />

            <UrlList urls={urls} onUrlDeleted={handleUrlDeleted} onUrlEdited={handleUrlEdited} />

        </div>
    )
}