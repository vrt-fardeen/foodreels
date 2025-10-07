import React from 'react'
import '../styles/auth.css'
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

const PartnerRegister = () => {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.businessName.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;
    const password = e.target.password.value;

     axios.post("http://localhost:3000/api/auth/food-partner/register",{
      name,
      email,
      phone,
      address,
      password
    }, { withCredentials: true
    })
    .then(response => {
      console.log(response.data);
      navigate("/create-food");
    })
    .catch(error => {
      console.error("There was an error!", error);
    })
  }


  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h1 className="auth-title">Partner Registration</h1>
          <p className="auth-subtitle">Create your food partner account</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="businessName">Business Name</label>
            <input 
              type="text" 
              id="businessName"
              placeholder="Your Restaurant Name"
            />
          </div>
 
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Business Email</label>
              <input 
                type="email" 
                id="email"
                placeholder="business@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input 
                type="tel" 
                id="phone"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="address">Business Address</label>
            <input 
              type="text" 
              id="address"
              placeholder="123 Restaurant St, City"
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

          <button type="submit">Register as Partner</button>

          <div className="auth-footer">
            Already have a partner account?{' '}
            <a href="/food-partner/login" className="auth-link">Sign in</a>
          </div>
          <div className="auth-footer">
            Want to register as a customer?{' '}
            <a href="/user/register" className="auth-link">Register as User</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PartnerRegister