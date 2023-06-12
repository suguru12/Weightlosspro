import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import "./login.css";
import "./But.css";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
 

function validateForm() {
     return email.length > 1 && password.length > 1;
 }

function handleSubmit(event) {
       event.preventDefault();
}

const handleForgotPasswordClick = () => {
  setShowForgotPassword(true);
};
const handleEmailChange = (e) => {
  setEmail(e.target.value);
};

const handleForgotPasswordSubmit = (e) => {
  e.preventDefault();
  // Implement your password reset logic here, such as sending a reset link to the user's email address
  console.log("Reset password for email:", email);
  // Reset the email input field
  setEmail("");
  // Hide the ForgotPassword component
  setShowForgotPassword(false);
};

if (showForgotPassword) {
  return (
    <div className="Login">
      <h2>Forgot Password</h2>
      <Form onSubmit={handleForgotPasswordSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!email}>
          Reset Password
        </Button>
      </Form>
      <p>
        Remembered your password?{" "}
        <button
          className="text-210"
          onClick={() => setShowForgotPassword(false)}
        >
          Back to Login
        </button>
       
      </p>
    </div>
  );
}

return (

    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <button block size="lg" type="submit" disabled={!validateForm() }>
          Login
        </button>
        <p className="flex justify-center items-center gap-1 text-[16px] text-200 ">
          Don't have an account?
          <Link to="/signup" className="text-210">
            SignUp
          </Link>
        </p>
        <button
            className="btn--medium"
            onClick={handleForgotPasswordClick}
            type="button"
          >
            Forgot Password?
          </button>
      </Form>
    </div>
  );
}
export default Login;