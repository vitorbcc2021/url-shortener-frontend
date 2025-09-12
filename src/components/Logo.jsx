import './Logo.css'

export default function Logo() {
    return (
        <div className="logo-container">
            <img
                src="/images/Logo.png"
                alt="Url Shortener - Encurtador de URLs"
                className="app-logo"
            />

            <h1>Url Shortener</h1>
        </div>
    )
}