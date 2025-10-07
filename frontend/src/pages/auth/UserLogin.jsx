import React from 'react';
import '../../styles/auth-shared.css';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const UserLogin = () => {

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const response = await axios.post("http://localhost:3000/api/auth/user/login", {
      email,
      password
    }, { withCredentials: true });

    console.log(response.data);

    navigate("/"); // Redirect to home after login

  };

  return (
        <div className="auth-page-wrapper">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                <div className="auth-card" role="region" aria-labelledby="user-login-title">
                    <header>
                        <h1 id="user-login-title" className="auth-title">Welcome back</h1>
                        <p className="auth-subtitle">Sign in to continue your food journey.</p>
                    </header>
                    <form className="auth-form" onSubmit={handleSubmit} noValidate>
                        <div className="field-group">
                            <label htmlFor="email">Email</label>
                            <input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" />
                        </div>
                        <div className="field-group">
                            <label htmlFor="password">Password</label>
                            <input id="password" name="password" type="password" placeholder="••••••••" autoComplete="current-password" />
                        </div>
                        <button className="auth-submit" type="submit">Sign In</button>
                    </form>
                    <div className="auth-alt-action">
                        New here? <a href="/user/register">Create account</a>
                    </div>
                </div>
                <Link to="/" className="home-nav-button">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    Home
                </Link>
            </div>
        </div>
  );
};

export default UserLogin;
