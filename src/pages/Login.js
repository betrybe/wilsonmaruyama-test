import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
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
      <div className="form-card">
        <Form onSubmit={ console.log('ok') } className="form-control">
          <Form.Group size="lg" controlId="email">
            <Form.Control
              data-testid="email-input"
              autoFocus
              type="email"
              placeholder="E-mail"
              className="input-control"
              value={ formEmail }
              onChange={ (e) => setFormEmail(e.target.value) }
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Control
              data-testid="password-input"
              type="password"
              placeholder="Senha"
              className="input-control"
              value={ formPassword }
              onChange={ (e) => setFormPassword(e.target.value) }
            />
          </Form.Group>
          <Button
            block
            size="lg"
            type="submit"
            className="buttom-control"
            disabled={ !validateForm() }
            onClick={ loginPage }
          >
            Entrar
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
