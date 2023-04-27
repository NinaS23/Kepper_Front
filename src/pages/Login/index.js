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
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <LoginContainer>
                <BoxContainer marginRight={"10%"}>
                    <BoxSingInAndSingUp backgroundColor={"#FFFFFF"}>
                        <InputDiv>
                            <_Input
                                type='text'
                                placeholder="Email .."
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <_Input
                                type={typeInput}
                                placeholder="Senha .."
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                            <VisibilityContainer>
                                <div>
                                    <Icon typeInput={typeInput} setTypeInput={setTypeInput} />
                                </div>
                            </VisibilityContainer>
                        </InputDiv>
                        <SendUserInfo marginTop={"120px"}>
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