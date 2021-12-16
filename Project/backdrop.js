import styled, { keyframes } from "styled-components";

const backdrop = keyframes`from {background:rgba(0,0,0,0)}
 to {background:rgba(0,0,0,0.5)}`

const Backdrop = styled.div`
animation:${backdrop} 0.7s ease-in-out;
width:100vw;
height:100vh;
position:fixed;
background:rgba(0,0,0,0.5);
left:0;
top:0;

`

export default Backdrop;