import './RegistrationPage.css'

function RegistrationPage() {
    return (
        <>
            <h1>Url Shortener</h1>

            <div className="auth-container">
                <form className="auth-form">
                    <h2>Registration</h2>
                    <div className="auth-form-group">
                        <label htmlFor='username'>Username</label>
                        <input id="username" type="text" required></input>
                    </div>

                    <div className="auth-form-group">
                        <label htmlFor='password'>Password</label>
                        <input id="password" type="password" required></input>
                    </div>

                    <div className="goto-register-page">
                        <a href='./LoginPage'>Already registered?</a>
                    </div>

                    <button type='submit' className='submit-btn'>Cadastrar</button>

                </form>
            </div>


        </>
    )
}

export default RegistrationPage
