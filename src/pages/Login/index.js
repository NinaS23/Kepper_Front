import loginGuy from "../../assets/imgs/login.png";
import {
    ImageContainer,
    LoginContainer
} from "./style";
import { BoxSingInAndSingUp, _Input, InputDiv, BoxContainer } from "../../assets/styles/globalStyles";
function Login() {
    return (
        <>
            <LoginContainer>
                <BoxContainer>
                    <BoxSingInAndSingUp>
                        <InputDiv>
                            <_Input type='text' placeholder="Email .." />
                            <_Input type='text' placeholder="Senha .." />
                            <div>o</div>
                        </InputDiv>
                        
                    </BoxSingInAndSingUp>
                </BoxContainer>
                <ImageContainer>
                    <img src={loginGuy} alt="pessoas com gráfico" />
                </ImageContainer>
            </LoginContainer>
        </>
    );
}

export default Login;