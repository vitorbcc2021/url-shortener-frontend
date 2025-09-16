import Logo from '../../components/Logo'
import './HomePage.css'
import LogoutButton from './components/LogoutButton'
import UrlList from './components/UrlList/UrlList'
import UrlSubmit from './components/UrlSubmit'
import { useState } from 'react'

export default function HomePage() {
    const [urls, setUrls] = useState([])

    function handleUrlDeleted(deletedUrlId) {
        setUrls(prevUrls => prevUrls.filter(url => url._id !== deletedUrlId))
    }

    function handleUrlEdited(updatedUrl) {
        setUrls(prevUrls => prevUrls.map(url => url._id === updatedUrl._id ? updatedUrl : url))
    }

    function handleUrlCreated(newUrl) {
        setUrls(prevUrls => [...prevUrls, newUrl])
    }

    function syncUrls(urls) {
        setUrls(urls)
    }


    return (
        <div className="home-container">

            <Logo />

            <p className="access-hint">You can access using: <em>https://url-shortener-1x3f.onrender.com/<u>your-short-url-here</u></em></p>

            <div className="logout-container">
                <LogoutButton />
            </div>

            <UrlSubmit className="url-submit" onUrlCreated={handleUrlCreated} />

            <UrlList
                urls={urls}
                syncUrls={syncUrls}
                onUrlDeleted={handleUrlDeleted}
                onUrlEdited={handleUrlEdited}
            />

        </div>
    )
}