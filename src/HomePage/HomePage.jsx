import './HomePage.css'
import './components/UrlList'
import UrlList from './components/UrlList'

function HomePage() {
    const urlList = [
        { id: 1, original: 'https://www.google.com', short: 'goo.gl/abc123' },
        { id: 2, original: 'https://www.github.com', short: 'ghb.io/xyz456' },
        { id: 3, original: 'https://www.youtube.com', short: '123456'},
        { id: 4, original: 'https://www.facebook.com', short: 'asassa'},
    ]

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

            <UrlList urls={urlList}/>

        </div>
    )
}

export default HomePage