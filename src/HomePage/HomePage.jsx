import './HomePage.css'
import LogoutButton from './components/LogoutButton'
import UrlList from './components/UrlList'
import UrlSubmit from './components/UrlSubmit'

export default function HomePage() {
    return (
        <div className="home-container">

            <h1>Url Shortener</h1>

            <div className="logout-container">
                <LogoutButton />
            </div>

            <UrlSubmit />

            <UrlList urls={['Segurando lugar!']} />

        </div>
    )
}