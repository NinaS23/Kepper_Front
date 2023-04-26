import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from 'react-loader-spinner';
import axios from "axios";
import Icon from "../../components/Icon";
import welcomePic from "../../assets/imgs/signUp.png";
import {
    RegisterContainer,
    RegisterImageContainer,
    ImageRegister,
    FormSignUp,
    BoxButton,
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
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const [enable, setEnable] = useState(false);
    const navigate = useNavigate();

    function sendUserSignUpData(event) {
        event.preventDefault();

        setIsLoading(true);

        if (!email || !password || !confirmPassword) {
            alert("todos os campos são obrigatórios");
            setIsLoading(false);
        } else {
            const body = {
                email,
                password,
                confirmPassword
            }
            setEnable(true);
            const promise = axios.post("http://localhost:6003/sign-up", body);

            promise
                .then(res => {
                    navigate("/sign-in");
                }).catch((err) => {
                    console.log(err)
                    if (err.response.status === 422) {
                        alert(err.response.data.details[0].message)
                    } else {
                        alert(err.response.data);
                    }
                    setIsLoading(false);
                    setEnable(false);
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
                        {isLoading ? (
                            <BoxButton>
                                <SendUserInfo disabled >
                                    <ThreeDots
                                        height={10}
                                        width={60}
                                        radius="9"
                                        color="#ffffff"
                                        ariaLabel="three-dots-loading"
                                        wrapperStyle={{}}
                                        wrapperClassName=""
                                        visible={true}
                                    />

                                </SendUserInfo>
                            </BoxButton>
                        ) :
                            <BoxButton>
                                <SendUserInfo
                                    marginTop={"0px"}
                                    type="subimit"
                                >
                                    <h2>Cadastrar</h2>
                                </SendUserInfo>
                            </BoxButton>
                        }
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