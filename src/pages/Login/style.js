import styled from "styled-components";
import { Link } from 'react-router-dom';


const LoginContainer = styled.div`
width: 100vw;
height: 100vh;
background-color: #E1ECFE;
display: flex;
justify-content: space-around;
`
const Box = styled.div`
background-color: red;
display: flex;
justify-content: center;
flex-direction: column;
margin-right: 10%;
div{
    position: absolute;
    width: 417px;
    height: 484px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 40px;
}
`

const ImageContainer = styled.div`
margin-left: 20%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
export {
    LoginContainer,
    Box,
    ImageContainer
}