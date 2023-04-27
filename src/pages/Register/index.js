import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
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
    SendUserInfo,
    PageForm,
    BoxButton
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
            toast.error("todos os campos são obrigatórios");
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
                    if (err.response.status === 422 && err.response.data.details[0].message ===
                        "\"confirmPassword\" must be [ref:password]") {
                        toast.error("As senhas que você digitou não coincidem. Por favor, tente novamente")

                    } else if (err.response.status === 422 && err.response.data.details[0].message ===
                        '"password" length must be at least 9 characters long') {
                        toast.error("A senha precisa ter no mínimo 9 caracters");

                    } else {
                        toast.error(err.response.data);
                    }
                    setIsLoading(false);
                    setEnable(false);
                })
        }
    }

    return (
        <PageForm onSubmit={sendUserSignUpData}>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored" />
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
                            <BoxButton marginTopButton={"60px"}>
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
                            <BoxButton marginTopButton={"60px"}>
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
        </PageForm>
    )
}

export default Register;