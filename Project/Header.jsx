import { useState } from "react";
import styled, { css } from "styled-components";
import LoginModal from "./LoginModal";
export const Header = () => {
  const menu = ["Our Company", "The Pictures", "Notice", "Board"];
  const menuList = ["CEO인사말", "연혁", "파트너"]
  const [showLogin, setShowLogin] = useState(false);
  const [active, setActive] = useState(false)
  const handleMenuList = (name) => {
    if (name === "Our Company") {
      setActive(true)
    }
    else if (active == true) {
      setActive(false)
    }
  }

  return (
    <>
      <Container>
        <TitleWrapper>
          <Logo src="https://cdn2.iconfinder.com/data/icons/free-version/128/recycling-512.png" alt="logo" />
          <Title>에코</Title>
          <BtnLogin onClick={() => setShowLogin(true)}>로그인</BtnLogin>
          {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
        </TitleWrapper>
        <Menu active={active}>
          <List>
            {menu.map((item) => (
              <ListItem onMouseOver={() => handleMenuList(item)}
                onMouseOut={() => handleMenuList(item)} key={item}>{item}</ListItem>

            ))}
          </List>
          <MenuList>
            {menuList.map((list) => <ListItem key={list}>{list}</ListItem>)}
          </MenuList>
        </Menu>
      </Container>
    </>
  );
};

const Container = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #54b354;
 
  height: 70px;
`;
const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled.img`
  width: 50px;
  height: 50px;
`;
const Title = styled.h3`
  padding: 10px;
`;
const BtnLogin = styled.button`
  cursor: pointer;
`;
const Menu = styled.nav`position:relative;
 ${({ active }) => active && css`${MenuList}{display:block}`}`;
const MenuList = styled.div`
display:none;
position:absolute;
top:90%;
background-color:#fff;
color:#000;
box-shadow: 0 1px 5px #000
`


const List = styled.ul`
  display: flex;
  list-style: none;
  padding:0;
`;
const ListItem = styled.li`
padding:10px;
margin:20px;
cursor: pointer;
&:hover{background:rgba(204,204,204, .5);}
`;

export default Header;
