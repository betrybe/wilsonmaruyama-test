import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './styles/Login.css';

function Login() {
  const [formEmail, setFormEmail] = useState('');
  const [formPassword, setFormPassword] = useState('');
  const history = useHistory();

  function validateForm() {
    const minPass = 6;
    const regexFilter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (regexFilter.test(formEmail) && formPassword.length > minPass) {
      return true;
    }
  }

  function loginPage() {
    const newUrl = '/carteira';
    history.push(newUrl);
    console.log(formEmail);
    console.log(formPassword);
    return null;
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
        <Button
          block
          size="lg"
          type="submit"
          disabled={ !validateForm() }
          onClick={ loginPage }
        >
          Login
        </Button>
      </Form>
      <Link to="/carteira">teste</Link>
    </div>
  );
}

export default Login;
