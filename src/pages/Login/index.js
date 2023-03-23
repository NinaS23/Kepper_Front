import { useState } from "react";
import loginGuy from "../../assets/imgs/login.png";
import Icon from "../../components/Icon";
import {
    ImageContainer,
    LoginContainer,
    ImageLogin
} from "./style";
import {
    BoxSingInAndSingUp,
    _Input,
    InputDiv,
    BoxContainer,
    VisibilityContainer,
    SendUserInfo
} from "../../assets/styles/globalStyles";

function Login() {
    const [typeInput, setTypeInput] = useState("password");
    return (
        <>
            <LoginContainer>
                <BoxContainer>
                    <BoxSingInAndSingUp>
                        <InputDiv>
                            <_Input type='text' placeholder="Email .." />
                            <_Input type={typeInput} placeholder="Senha .." />
                            <VisibilityContainer>
                                <div>
                                    <Icon typeInput={typeInput} setTypeInput={setTypeInput} />
                                </div>
                            </VisibilityContainer>
                        </InputDiv>
                        <SendUserInfo>
                            <h2>Entrar</h2>
                        </SendUserInfo>
                    </BoxSingInAndSingUp>
                </BoxContainer>
                <ImageContainer>
                    <ImageLogin src={loginGuy} alt="pessoas com gráfico" />
                </ImageContainer>
            </LoginContainer>
        </>
    );
}

export default Login;