import styled from "styled-components";

const BoxSingInAndSingUp = styled.div`
position: absolute;
width: 417px;
height: 484px;
background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 40px;
`

const BoxContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-right: 10%;
`


const _Input = styled.input`
  background-image: linear-gradient(#20aee3, #20aee3), linear-gradient(#bfbfbf, #bfbfbf);
  border: 0 none;
  background-position: center bottom, center calc(100% - 1px);
  background-repeat: no-repeat;
  background-size: 0 2px, 100% 1px;
  margin-left: 47px;
  margin-top: 45px;
  color: #bfbfbf;
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
export {
    BoxSingInAndSingUp,
    _Input,
    InputDiv,
    BoxContainer
}