import styled from "styled-components";

const BoxSingInAndSingUp = styled.div`
position: absolute;
width: 417px;
height: 484px;
background:  ${(props) => props.backgroundColor};;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 40px;
    @media (max-width: 614px) {
        width: 95%;
        height: 25rem;
        position: sticky;
}
`

const BoxContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-right:  ${(props) => props.marginRight};
    @media (max-width: 614px) {
        margin-right: 0%;
        margin-left: 5%;
}
`


const _Input = styled.input`
  background-image: linear-gradient(#20aee3, #20aee3), linear-gradient(#bfbfbf, #bfbfbf);
  border: 0 none;
  background-position: center bottom, center calc(100% - 1px);
  background-repeat: no-repeat;
  border-radius: 12px;
  background-color: transparent;
  background-size: 0 2px, 100% 1px;
  margin-left: 47px;
  margin-top: 45px;
  color: #898686;
  min-height: 35px;
  width: 70%;
  font-size: 15px;
  &:focus {
      background-size: 100% 2px, 100% 1px;
      outline: 0 none;
      transition-duration: 0.3s;
      color: #525252;
    }
    &:first-child{
        margin-top: 30%;
    }
`;
const InputDiv = styled.div`
`
const VisibilityContainer = styled.div`
position: absolute;
width: 32px;
height: 28px;
background: #FF936A;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 5px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
margin-left: 303px;
margin-top: 7px;
ion-icon{
  color:  #FFFFFF;
  cursor:pointer;
  width: 40px;
  height: 24px;
}
&:hover{
    cursor: pointer;
    background-color: #fc9e7b;
}
@media (max-width: 614px) {
    margin-left:74%;
}
`
const SendUserInfo = styled.button`
position: relative;
width: 200px;
height: 30px;
margin-top: ${(props) => props.marginTop};
margin-left: 94px;
border-style: none;
background: #FF936A;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 15px;
h2{
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 29px;
    color: #FFFFFF;
}
div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
&:hover{
    cursor: pointer;
    background-color: #fc9e7b;
}
@media (max-width: 614px) {
    margin-top: 35%;
}
`
const PageForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
background-color: #FFFFFF;
height: 100%;
`

const BoxButton = styled.div`
position: absolute;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 35px;
width: 60%;
margin-top: ${(props) => props.marginTopButton};;
`

export {
    BoxSingInAndSingUp,
    _Input,
    InputDiv,
    BoxContainer,
    VisibilityContainer,
    SendUserInfo,
    PageForm,
    BoxButton
}