import React from 'react';
import '../../styles/auth-shared.css';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const UserRegister = () => {

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;


        const response = await axios.post("http://localhost:3000/api/auth/user/register", {
            fullName: firstName + " " + lastName,
            email,
            password
        },
        {
            withCredentials: true
        })

        console.log(response.data);

        navigate("/")

    };

    return (
        <div className="auth-page-wrapper">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                <div className="auth-card" role="region" aria-labelledby="user-register-title">
                    <header>
                        <h1 id="user-register-title" className="auth-title">Create your account</h1>
                        <p className="auth-subtitle">Join to explore and enjoy delicious meals.</p>
                    </header>
                    <nav className="auth-alt-action" style={{ marginTop: '-4px' }}>
                        <strong style={{ fontWeight: 600 }}>Switch:</strong> <Link to="/user/register">User</Link> • <Link to="/food-partner/register">Food partner</Link>
                    </nav>
                    <form className="auth-form" onSubmit={handleSubmit} noValidate>
                        <div className="two-col">
                            <div className="field-group">
                                <label htmlFor="firstName">First Name</label>
                                <input id="firstName" name="firstName" placeholder="Jane" autoComplete="given-name" />
                            </div>
                            <div className="field-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input id="lastName" name="lastName" placeholder="Doe" autoComplete="family-name" />
                            </div>
                        </div>
                        <div className="field-group">
                            <label htmlFor="email">Email</label>
                            <input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" />
                        </div>
                        <div className="field-group">
                            <label htmlFor="password">Password</label>
                            <input id="password" name="password" type="password" placeholder="••••••••" autoComplete="new-password" />
                        </div>
                        <button className="auth-submit" type="submit">Sign Up</button>
                    </form>
                    <div className="auth-alt-action">
                        Already have an account? <Link to="/user/login">Sign in</Link>
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

export default UserRegister;
