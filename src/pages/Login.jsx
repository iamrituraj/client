import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { useNavigate } from "react-router-dom";
const CryptoJS = require("crypto-js");


const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.8)
    ),
    url("https://imageio.forbes.com/specials-images/imageserve/756928066/960x0.jpg?fit=bounds&format=jpg&width=960")
      center;
  background-size: cover;
  display: flex;
  /* flex-direction:column ; */
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
  ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 35%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    background-color: green;
    cursor: not-allowed;
  }
`;
const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: none;
  cursor: pointer;
  color: black;
  &:visited {
    color: black;
  }
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    const data = login(dispatch, { username, password });
    
    data.then((result) => {
      console.log(result); 
      console.log("login");
      if (result.status === 200) {
      navigate("/");
      }
    }).catch((err) => {
       console.log("problem");

      console.log(err);
    });
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          ></Input>
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
          <Button onClick={handleLogin} disabled={isFetching}>
            LOG IN
          </Button>
          {error && <Error>Something went Wrong .</Error>}
          <Link>FORGOT PASSWORD ?</Link>
          <Link href = "/register">CREATE A NEW ACCOUNT.</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
