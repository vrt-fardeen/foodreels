import React from 'react';
import '../../styles/auth-shared.css';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const FoodPartnerLogin = () => {

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const response = await axios.post("http://localhost:3000/api/auth/food-partner/login", {
      email,
      password
    }, { withCredentials: true });

    console.log(response.data);

    navigate("/create-food"); // Redirect to create food page after login

  };

  return (
        <div className="auth-page-wrapper">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                <div className="auth-card" role="region" aria-labelledby="partner-login-title">
                    <header>
                        <h1 id="partner-login-title" className="auth-title">Partner login</h1>
                        <p className="auth-subtitle">Access your dashboard and manage orders.</p>
                    </header>
                    <form className="auth-form" onSubmit={handleSubmit} noValidate>
                        <div className="field-group">
                            <label htmlFor="email">Email</label>
                            <input id="email" name="email" type="email" placeholder="business@example.com" autoComplete="email" />
                        </div>
                        <div className="field-group">
                            <label htmlFor="password">Password</label>
                            <input id="password" name="password" type="password" placeholder="Password" autoComplete="current-password" />
                        </div>
                        <button className="auth-submit" type="submit">Sign In</button>
                    </form>
                    <div className="auth-alt-action">
                        New partner? <a href="/food-partner/register">Create an account</a>
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

export default FoodPartnerLogin;
