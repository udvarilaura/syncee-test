import BackgroundImage from '../../assets/syncee_frontend_test_wallpaper.png';
import './sign-in.style.css';
import LoginForm from '../../components/log-in/log-in-form.component.jsx';
import Logo from '../../assets/syncee-logo-300px.png';

const SignIn = () => {
return (
    <div className="sign_in_page">
        <div className="login-side">
            <div className="login-forms-container">
            <img src={Logo} className='syncee-logo' alt='alt'/>
            <h2 className="title">Login</h2>
            <p className="subtitle">See your growth and get consulting support!</p>
            <div className="login-forms">
                <LoginForm />
            </div>
            <p className="sign-up">Not registered yet? <a href='/sign-up'>Create an account!</a></p>
            <div className="footer-rights">2022 Syncee. All rights reserved.</div>
            </div>
            
        </div>
        <div className="page-decoration" style={{
        backgroundImage:`url(${BackgroundImage})`,
        }}>
        </div>
    </div>
)
}

export default SignIn