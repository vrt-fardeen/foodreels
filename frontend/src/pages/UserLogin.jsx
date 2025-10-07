import React from 'react'
import '../styles/auth.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const response = await axios.post("http://localhost:3000/api/auth/user/login",{
      email,
      password
    }, { withCredentials: true});

    console.log(response.data);
    navigate("/");
  }


  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-subtitle">Sign in to your account</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email"
              placeholder="you@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password"
              placeholder="••••••••"
            />
          </div>

          <button type="submit">Sign In</button>

          <div className="auth-footer">
            Don't have an account?{' '}
            <a href="/user/register" className="auth-link">Create one</a>
          </div>
          <div className="auth-footer">
            Looking for partner login?{' '}
            <a href="/food-partner/login" className="auth-link">Login as Partner</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserLogin