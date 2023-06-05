import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";

import "./login.css";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
function validateForm() {
     return email.length > 0 && password.length > 0;
 }

function handleSubmit(event) {
       event.preventDefault();
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
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
        <p className="flex justify-center items-center gap-1 text-[16px] text-200 ">
          Don't have an account?
          <Link to="/signup" className="text-210">
            SignUp
          </Link>
        </p>
      </Form>
    </div>
  );
}
export default Login;