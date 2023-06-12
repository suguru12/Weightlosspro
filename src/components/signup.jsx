import React, {useState} from 'react';
import "./signup.css";
import "./But.css";

function Signup() {

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    } else if (id === "lastName") {
      setLastName(value);
    } else if (id === "email") {
      setEmail(value);
    } else if (id === "password") {
      setPassword(value);
    } else if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = () => {
    if (firstName && lastName && email && password && password === confirmPassword) {
      // Perform signup logic here
      alert("Successfully Registered");
    } else {
      alert('Please fill in all fields and ensure passwords match');
    }
  };

    return (
      <div className="form">
        <div className="form-body">
          <div className="username">
            <label className="form__label" for="firstName">First Name </label>
            <input
              className="form__input"
              type="text"
              value={firstName}
              onChange={(e) => handleInputChange(e)}
              id="firstName"
              placeholder="First Name"
            />
          </div>
          <div className="lastname">
            <label className="form__label" for="lastName">Last Name </label>
            <input
              type="text"
              name=""
              id="lastName"
              value={lastName}
              className="form__input"
              onChange={(e) => handleInputChange(e)}
              placeholder="LastName"
            />
          </div>
          <div className="email">
            <label className="form__label" for="email">Email </label>
            <input
              type="email"
              id="email"
              className="form__input"
              value={email}
              onChange={(e) => handleInputChange(e)}
              placeholder="Email"
            />
          </div>
          <div className="password">
            <label className="form__label" for="password">Password </label>
            <input
              className="form__input"
              type="password"
              id="password"
              value={password}
              onChange={(e) => handleInputChange(e)}
              placeholder="Password"
            />
          </div>
          <div className="confirm-password">
            <label className="form__label" for="confirmPassword">Confirm Password </label>
            <input
              className="form__input"
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => handleInputChange(e)}
              placeholder="Confirm Password"
            />
          </div>
        </div>
        <p>Already have an account? <a href="/login">Login</a></p>
        <div className="footer">
          <button
            onClick={() => handleSubmit()}
            type="submit"
            className='btn--medium'
          >
            Submit
          </button>
          </div>
        
       
      </div>
    );
  }

export default Signup;
