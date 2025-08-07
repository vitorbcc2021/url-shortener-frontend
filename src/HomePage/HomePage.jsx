import './HomePage.css'
import './components/UrlList'
import UrlList from './components/UrlList'

export default function HomePage() {
    return (
        <div className="home-container">
            
            <h1>Url Shortener</h1>
            
            <div className="logout-container">
                <button className="logout-btn">Logout</button>
            </div>
        
            <div className="url-submit">
                <form className="url-form">
                    <input type="text" placeholder='ex:www.meu-site.com...'></input>
                    <button className="submit-url-btn" type="submit">submit</button>
                </form>
            </div>

            <UrlList urls={['Segurando lugar!']}/>

        </div>
    )
}