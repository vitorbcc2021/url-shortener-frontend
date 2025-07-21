import './LoginPage.css'

function LoginPage() {
    return (
        <>
            <h1>Url Shortener</h1>

            <div className="auth-container">
                <form className="auth-form">
                    <h2>Login</h2>
                    <div className="auth-form-group">
                        <label htmlFor='username'>Username</label>
                        <input id="username" type="text" required></input>
                    </div>

                    <div className="auth-form-group">
                        <label htmlFor='password'>Password</label>
                        <input id="password" type="password" required></input>
                    </div>

                    <div className="goto-register-page">
                        <a href=''>Not registered?</a>
                    </div>

                    <button type='submit' className='submit-btn'>Entrar</button>

                </form>
            </div>


        </>
    )
}

export default LoginPage
