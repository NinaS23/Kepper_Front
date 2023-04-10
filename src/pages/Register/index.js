import { useState } from "react";
import Icon from "../../components/Icon";
import welcomePic from "../../assets/imgs/signUp.png";
import {
    RegisterContainer,
    RegisterImageContainer,
    ImageRegister
} from "./style";
import {
    BoxSingInAndSingUp,
    _Input,
    InputDiv,
    BoxContainer,
    VisibilityContainer,
    SendUserInfo
} from "../../assets/styles/globalStyles";


function Register() {
    const [typeInput, setTypeInput] = useState("password");
    return (
        <RegisterContainer>
            <BoxContainer marginRight={"58%"}>
                <BoxSingInAndSingUp backgroundColor={"#FFFFFF"}>
                    <InputDiv>
                        <_Input type='text' placeholder="Email .." />
                        <_Input type={typeInput} placeholder="Senha .." />
                        <_Input type={typeInput} placeholder="Confirmar Senha .." />
                        <VisibilityContainer>
                            <div>
                                <Icon typeInput={typeInput} setTypeInput={setTypeInput} />
                            </div>
                        </VisibilityContainer>
                    </InputDiv>
                    <SendUserInfo marginTop={"70px"}>
                        <h2>Cadastrar</h2>
                    </SendUserInfo>
                </BoxSingInAndSingUp>
            </BoxContainer>
            <RegisterImageContainer>
                <div>
                    <ImageRegister src={welcomePic} alt="pessoas com gráfico" />
                </div>
            </RegisterImageContainer>
        </RegisterContainer>
    )
}

export default Register;