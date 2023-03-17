import styled from "styled-components";

const Title = styled.h1`
  color: pink;
`
const TopMenu = styled.div`
display: flex;
justify-content: space-between;
height: 59px;
div:first-child{
    width: 25%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
div{
    width: 28%;
    justify-content: center;
    display: flex;
    align-items: center;
}
`

const ImageHeight = styled.img`
margin-left: 15px;
width: 560px;
height: fit-content;
`

const HomeContent = styled.div`
align-items: center;
height: 38rem;
display: flex;
`
const WelcomeSide = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
width: 50%;
height: 80%;
border-radius: 54px;

`

const TopText = styled.h2`
font-family: 'Lexend', sans-serif;
color: #FF936A;
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 18px;
`
const SingUpButton = styled.button`
background-color: #FF936A;
border-style: none;
width: 107px;
height: 26px;
border-radius: 15px;
margin-left: 13px;
h2{
    font-family: 'Lexend', sans-serif;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
}
`
const WelcomeText = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 88%;
height: 90%;
border-radius: 54px;
h1{
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 40px;
    color: #100816;
}
h2{
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    color: #000000;
}
`
export {
    TopMenu,
    ImageHeight,
    HomeContent,
    WelcomeSide,
    TopText,
    SingUpButton,
    WelcomeText
}
