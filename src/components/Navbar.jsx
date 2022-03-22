import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import Badge from "@material-ui/core/Badge";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { logProcess } from "../redux/apiCalls";
import { emptyCart } from "../redux/cartRedux";
import { publicRequest } from "../requestMethods";
const Container = styled.div`
  height: 60x;
  overflow: hidden;

  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
  ${mobile({ fontSize: "24px" })}
`;

const Link = styled.a`
  color: black;
  text-decoration: none;

  &:visited {
    color: black;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  border-radius: 5px;
`;

const Input = styled.input`
  border: none;

  &:focus {
    outline: none;
  }
  ${mobile({ width: "50px" })}
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const MenuItem = styled.div`
  font-size: 14ppx;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "13px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogOut = () => {

    handleLogOutData(cart.initial, cart.products, user);
    dispatch(emptyCart());
    logProcess(dispatch);
  }

  const handleLogOutData = async(initial,pro,user) =>{
    let data = []

    pro.forEach((element, index) => {
      if (initial === 0) {
        data = [
          ...data,
          {
             "product": [{
                "product_id":element.product_id,
                "img":element.img,
                "title":element.title,
                "size":"S",
                "color":"#C8AE95",
                "price":element.price,
            }],
            "quantity": element.quantity
          },
        ];
      } else {
        initial = initial - 1;
      }
    });

    // const BASE_URL = "http://localhost:8000/api/carts/";
    const TOKEN = `${user.currentUser.accessToken}`;
    const res = await publicRequest.put(`/carts/${user.currentUser._id}`, data, {
      headers: { token: `Bearer ${TOKEN}` },
    });

  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "grey", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <Link href="/">f-KART</Link>
          </Logo>
        </Center>
        <Right>
          {user.currentUser === null ? (
            <>
              <Link href="/login">
                <MenuItem>SIGN IN</MenuItem>
              </Link>
              <Link href="/register">
                <MenuItem>SIGN UP</MenuItem>
              </Link>
            </>
          ) : (
            <>
              <MenuItem>{user.currentUser.username.toUpperCase()}</MenuItem>
              <MenuItem onClick={handleLogOut}>LOG OUT</MenuItem>
            </>
          )}
          <Link href="/cart">
            <MenuItem>
              <Badge badgeContent={cart.quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
