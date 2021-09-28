import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Login() {
  const [formEmail, setFormEmail] = useState('');
  const [formPassword, setFormPassword] = useState('');

  function validateForm() {
    const minPass = 6;
    return formEmail.length > 0 && formPassword.length > minPass;
  }

  return (
    <div className="login-holder">
      <Form onSubmit={ console.log('ok') }>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={ formEmail }
            onChange={ (e) => setFormEmail(e.target.value) }
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={ formPassword }
            onChange={ (e) => setFormPassword(e.target.value) }
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={ !validateForm() }>
          Login
        </Button>
      </Form>
      <Link to="/carteira">teste</Link>
    </div>
  );
}

export default Login;
