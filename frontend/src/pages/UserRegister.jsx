
import '../styles/auth.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserRegister = () => {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        

        const fullName = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const response = await axios.post("http://localhost:3000/api/auth/user/register",{
            fullName,
            email,
            password
        })

        console.log(response.data);

        navigate("/");
    }


  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h1 className="auth-title">Create Account</h1>
          <p className="auth-subtitle">Sign up to get started</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name"
              name="name"
              placeholder="John Doe"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email"
                name="email"
              placeholder="you@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password"
                name="password"
              placeholder="••••••••"
            />
          </div>

          <button type="submit">Create Account</button>

          <div className="auth-footer">
            Already have an account?{' '}
            <a href="/user/login" className="auth-link">Sign in</a>
          </div>
          <div className="auth-footer">
            Are you a restaurant owner?{' '}
            <a href="/food-partner/register" className="auth-link">Register as Partner</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserRegister