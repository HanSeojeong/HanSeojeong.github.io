import styled from "styled-components";
import Backdrop from "./backdrop"
const LoginModal = ({onClose}) => {

  const handleLogin =()=>{
  if(window.confirm("로그인하시겠습니까?")){
  onClose()
  }
  return onClose()
};
  
  return (<>
    <Container>
      <Header>
        로그인
        <button onClick={onClose}>X</button>
      </Header>
      <Body>
        <label>
          아이디:
          <input />
        </label>
        <br />
        <label>
          비밀번호:
          <input />
        </label>
      </Body>
      <Footer>
        <button onClick={handleLogin}>로그인</button>
      </Footer>
    </Container>
    <Backdrop onClick={onClose}/>
    </>
    );
  };

const Container = styled.div`
  position: fixed;
  width:300px;
  border:green 1px solid;
  border-radius:3px;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #cbff7d;
  z-index: 100;
`;
const Header = styled.div`
display:flex;
justify-content: space-between;
padding:5px;`
const Body = styled.div`padding:10px`
const Footer = styled.div`
  display:flex;
  justify-content:flex-end;
  padding:5px;`

export default LoginModal;
