import React from 'react'
import '../styles/auth.css'

const PartnerLogin = () => {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h1 className="auth-title">Partner Login</h1>
          <p className="auth-subtitle">Access your partner dashboard</p>
        </div>

        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="email">Business Email</label>
            <input 
              type="email" 
              id="email"
              placeholder="business@example.com"
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
            Want to become a partner?{' '}
            <a href="/food-partner/register" className="auth-link">Register here</a>
          </div>
          <div className="auth-footer">
            Looking for user login?{' '}
            <a href="/user/login" className="auth-link">Login as User</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PartnerLogin