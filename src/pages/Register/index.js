import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../../components/Icon";
import welcomePic from "../../assets/imgs/signUp.png";
import { api } from "../../services/apiService";

import {
    RegisterContainer,
    RegisterImageContainer,
    ImageRegister,
    FormSignUp
} from "./style";
import {
    BoxSingInAndSingUp,
    _Input,
    InputDiv,
    BoxContainer,
    VisibilityContainer,
    SendUserInfo
} from "../../assets/styles/globalStyles";
import axios from "axios";


function Register() {
    const [typeInput, setTypeInput] = useState("password");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const [enable, setEnable] = useState(false);
    const navigate = useNavigate();

    function sendUserSignUpData(event) {
        event.preventDefault();

        setIsLoading(true);

        if(!email || !password || !confirmPassword ) {
            alert("all fields need to be filled");
            setIsLoading(false);
        } else {
            const body = {
                email,
                password,
                confirmPassword
            }
            const promise = axios.post("http://localhost:6003/sign-up", body);
            promise
                .then(res => {
                    navigate("/sign-in");
                }).catch((err) => {
                    alert(err.response.data);
                    setIsLoading(false);
                })
        }
    }

    return (
        <FormSignUp onSubmit={sendUserSignUpData}>
            <RegisterContainer>
                <BoxContainer marginRight={"58%"}>
                    <BoxSingInAndSingUp backgroundColor={"#FFFFFF"}>
                        <InputDiv>
                            <_Input
                                type='text'
                                placeholder="Email .."
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                disabled={enable}
                            />
                            <_Input
                                type={typeInput}
                                placeholder="Senha .."
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                disabled={enable}
                            />
                            <_Input
                                type={typeInput}
                                placeholder="Confirmar Senha .."
                                value={confirmPassword}
                                onChange={e => setconfirmPassword(e.target.value)}
                                disabled={enable}
                            />
                            <VisibilityContainer>
                                <div>
                                    <Icon typeInput={typeInput} setTypeInput={setTypeInput} />
                                </div>
                            </VisibilityContainer>
                        </InputDiv>
                        <SendUserInfo
                            marginTop={"70px"}
                            type="subimit"
                        >
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
        </FormSignUp>
    )
}

export default Register;