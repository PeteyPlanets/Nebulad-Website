import React, { useState } from "react";
import axios from "axios";
import { useUser } from "../../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { showAlert } from "../../util/alerts";
import { API_BASE_URL } from "../../apiConfig";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { setUser, setLoading } = useUser();
  const navigate = useNavigate();

  let redirectLink;

  const login = async (email, password, setUser, setLoading) => {
    try {
      const res = await axios({
        method: "POST",
        url: `${API_BASE_URL}/users/login`,
        data: {
          email,
          password,
        },
        withCredentials: true,
      });

      if (res.data.status === "success") {
        const userData = res.data.data.user;
        setUser(userData);
        setLoading(false);
        showAlert("success", "Logged in successfully", 2);
        navigate("/");
      }
    } catch (error) {
      redirectLink = "/login";
      showAlert("error", error.response.data.message, 3);
      setIsSubmitting(false);
      console.log("error", error.response.data.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    login(email, password, setUser, setLoading);
  };

  return (
    <Container>
      <Content>
        <Title>Login</Title>
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="password">Password</Label>
            <PasswordWrapper>
              <Input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                style={{
                  position: "absolute",
                  right: "1rem",
                  cursor: "pointer",
                  color: "#888",
                }}
              >
                <i
                  className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                ></i>
              </span>
            </PasswordWrapper>
          </InputContainer>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Logging in..." : "Login"}
          </Button>
        </Form>
        <Links>
          <Link to="/signup">Not a member? Sign up here</Link>
          <Link to="/forgot-password">Forgot password?</Link>
        </Links>
      </Content>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
  height: 90vh;
  background-image: url(https://nicky-blogs.s3.amazonaws.com/Assets/Backgrounds/Space1);
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  width: 500px;
  margin: 4.8rem auto;
  padding: 4.8rem;
  background-color: #fff;

  color: #333;
  border-radius: 1rem;
  box-shadow: 0px 4px 20px rgba(255, 255, 255, 0.25);
  box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.2),
    0 0 25px 10px rgba(255, 255, 255, 0.2),
    0 0 35px 20px rgba(255, 255, 255, 0.2);
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  background-color: #f5f5f5;
  width: 100%;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }
`;

const PasswordWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  width: 100%;
  border: none;
  border-radius: 0.5rem;
  background-color: #0077ff;

  color: #fff;
  font-size: 1.4rem;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #005ae6;
  }
  &:disabled {
    background-color: #a8c1ff;
    cursor: not-allowed;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  text-align: center;
  font-size: 1.3rem;

  & a {
    text-decoration: none;
    color: #1677ff;
  }
  & a:hover {
    color: var(--tertiary-color);
  }
`;
