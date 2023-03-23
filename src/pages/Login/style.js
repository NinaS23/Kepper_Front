import styled from "styled-components";
import { Link } from 'react-router-dom';


const LoginContainer = styled.div`
width: 100vw;
height: 100vh;
background-color: #E1ECFE;
display: flex;
justify-content: space-around;
align-items: center;
`

const ImageContainer = styled.div`
margin-left: 260px;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const ImageLogin = styled.img`
width: 90%;

`
export {
    LoginContainer,
    ImageContainer,
    ImageLogin
}