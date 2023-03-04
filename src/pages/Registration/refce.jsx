import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { StateContext } from "../../context";
import "./Registration.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

function Registration() {
  const { dispatch } = useContext(StateContext);
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [middle_name, setMiddle_name] = useState("");
  const [initials, setInitials] = useState("");
  const [gender, setGender] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [affiliation, setAffiliation] = useState("");
  const [country, setCountry] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [photo, setPhoto] = useState("");

  return (
    <div className="registration">
      <Container className="px-5">
        <h1 className="mt-5">РЕГИСТРАЦИЯ</h1>
        <Form>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          {/* username  */}
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Control
              type="text"
              placeholder="Логин"
              name="username"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <Form.Text className="text-muted">
              Обязательное поле. Не более 150 символов. Только буквы, цифры и
              символы @/./+/-/_.
            </Form.Text>
          </Form.Group>

          {/* first name  */}
          <Form.Group className="mb-3" controlId="formFirstname">
            <Form.Control
              name="first_name"
              value={first_name}
              type="text"
              placeholder="Имя"
              required
              onChange={(e) => setFirst_name(e.target.value)}
            />
          </Form.Group>

          {/* lats name  */}
          <Form.Group className="mb-3" controlId="formLastname">
            <Form.Control
              name="last_name"
              value={last_name}
              type="text"
              placeholder="Фамилия"
              required
              onChange={(e) => setLast_name(e.target.value)}
            />
          </Form.Group>

          {/* email  */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          {/* password1  */}
          <Form.Group className="mb-3" controlId="formBasicPassword1">
            <Form.Control
              type="password"
              placeholder="Пароль"
              name="password1"
              value={password1}
              required
              onChange={(e) => setPassword1(e.target.value)}
            />
            <Form.Text className="text-muted">
              Пароль должен содержать не менее 6 знаков.
            </Form.Text>
          </Form.Group>

          {/* password2  */}
          <Form.Group className="mb-3" controlId="formBasicPassword2">
            <Form.Control
              type="password"
              placeholder="Повторить пароль"
              name="password1"
              value={password2}
              required
              onChange={(e) => setPassword2(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
}

export default Registration;
