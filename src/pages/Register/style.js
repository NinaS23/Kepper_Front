import styled from "styled-components";


const RegisterContainer = styled.div`
width: 100vw;
height: 100vh;
background-color: #ffffff;
display: flex;
justify-content: space-around;
align-items: center;
`

const RegisterImageContainer = styled.div`
margin-left: 260px;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: red;
div{
    display: flex;
   flex-direction: column;
   justify-content:center;
   align-items:center;
    height: 100%;
    width: 60%;
    right:0;
    position:absolute;
    background-color: #E1ECFE;
    border-top-left-radius: 150px;
    border-bottom-left-radius: 150px;
}
`

const ImageRegister = styled.img`
width: 90%;

`
const FormSignUp = styled.form`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
background-color: #FFFFFF;
height: 100%;
`

export{
RegisterContainer,
ImageRegister,
RegisterImageContainer,
FormSignUp
}