import { useState } from "react";
import styled from "styled-components";
import { publicRequest } from "../requestMethods";
import { mobile } from "../responsive";
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
  width: 40%;
  background-color: white;
  ${mobile({ width: "76%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;
const Agreement = styled.span`
  font-size: 20px;
  margin: 20px 0;
`;
const Button = styled.button`
  width: 35%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [c_password, setC_password] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== c_password)
           return

    const data = {
      firstname,
      lastname,
      username,
      email,
      password: CryptoJS.AES.encrypt(
        password,
        "redmi_note_7s"
      ).toString(),
      // password
    };

    const res = await publicRequest.post("/auth/register", data);
    console.log(res.status);
    if (res.status === 201) window.location.replace("/login");
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form id="login-form" onSubmit={(e) => handleSubmit(e)}>
          <Input id="1" placeholder="name" required="true" onChange={(e) => setFirstname(e.target.value)}></Input>
          <Input id="2" placeholder="last name" required="true" onChange={(e) => setLastname(e.target.value)}></Input>
          <Input id="3" placeholder="username" required="true" onChange={(e) => setUsername(e.target.value)}></Input>
          <Input
            id="4"
            type="email"
            placeholder="email"
            required="true"
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
          <Input
            id="5"
            type="password"
            placeholder="password"
            required="true"
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
          <Input
            id="6"
            type="password"
            placeholder="confirm password"
            required="true"
            onChange={(e) => setC_password(e.target.value)}
          ></Input>
          <Agreement>
            By creating an account I agree to the terms and conditions .
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
