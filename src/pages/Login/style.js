import styled from "styled-components";


const LoginContainer = styled.div`
width: 100vw;
height: 100vh;
background-color: #E1ECFE;
display: flex;
justify-content: space-around;
align-items: center;
@media (max-width: 614px) {
    display: flex;
    flex-direction: column-reverse;  
    width: 100vw;
    height: 100vh;
}
`


const ImageContainer = styled.div`
margin-left: 260px;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
@media (max-width: 614px) {
    margin-left: 0px;
    height: auto;
}
`

const ImageLogin = styled.img`
width: 90%;
@media (max-width: 614px) {
    width: 70%;
}

`
export {
    LoginContainer,
    ImageContainer,
    ImageLogin
}