import {
  Facebook,
  Instagram,
  LinkedIn,
  MailOutline,
  Phone,
  Room,
  Twitter,
  YouTube,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  overflow: hidden;

  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Logo = styled.h1``;
const Link = styled.a`
  color: black;
  text-decoration: none;

  &:visited {
    color: black;
  }
`;
const Desc = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  ${mobile({ display: "none" })}
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
margin-bottom:20px ;
display:flex ;
`;
const Payment = styled.img`
width:30% ;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>
          <Link href="/">Fashion Atelier.</Link>
        </Logo>
        <Desc>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis,
          incidunt veniam explicabo earum cupiditate libero deleniti itaque eum.
          Necessitatibus iste corporis voluptatum odit est adipisci sint
          inventore nihil quos cumque.
        </Desc>
        <SocialContainer>
          <SocialIcon color="#3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="#E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="#0e76a8">
            <LinkedIn />
          </SocialIcon>
          <SocialIcon color="#FF0000">
            <YouTube />
          </SocialIcon>
          <SocialIcon color="#1DA1F2">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>
            <Link href="/">HOME</Link>
          </ListItem>
          <ListItem>
            <Link href="/products">PRODUCTS</Link>
          </ListItem>
          <ListItem>
            <Link href="/register">REGISTER</Link>
          </ListItem>
          <ListItem>
            <Link href="/login">LOGIN</Link>
          </ListItem>
          <ListItem>
            <Link href="/cart">CART</Link>
          </ListItem>
          
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          No 1, 2, AB Rd, Anoop Nagar, Indore, Madhya Pradesh 452011
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          9876543210
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          email@gmail.com
        </ContactItem>
        <Payment src="https://www.volusion.com/assets/images/ccp-cards.png " />
      </Right>
    </Container>
  );
};

export default Footer;
