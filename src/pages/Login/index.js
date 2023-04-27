import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThreeDots } from 'react-loader-spinner';
import axios from "axios";
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
    SendUserInfo,
    PageForm,
    BoxButton
} from "../../assets/styles/globalStyles";

function Login() {
    const [typeInput, setTypeInput] = useState("password");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const [enable, setEnable] = useState(false);

    function isUserExistent(event) {
        event.preventDefault();

        setIsLoading(true);
        if (!email || !password) {
            toast.error("todos os campos são obrigatórios");
            setIsLoading(false);
        } else {
            const body = {
                email,
                password
            };
            setEnable(true);
            const promise = axios.post("http://localhost:6003/sign-in", body);

            promise
                .then(res => {
                    const token = res.data.token
                    localStorage.setItem("token", token);
                }).catch((err) => {
                    if (err.response.status === 422 && err.response.data.details[0].message ===
                        '"password" length must be at least 9 characters long') {
                        toast.error("A senha precisa ter no mínimo 9 caracters");

                    } else {
                        toast.error(err.response.data);
                    }
                    setIsLoading(false);
                    setEnable(false);
                });
        }
    }
    return (
        <>
            <PageForm onSubmit={isUserExistent}>
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
                <LoginContainer>
                    <BoxContainer marginRight={"10%"}>
                        <BoxSingInAndSingUp backgroundColor={"#FFFFFF"}>
                            <InputDiv>
                                <_Input
                                    type='text'
                                    placeholder="Email .."
                                    disabled={enable}
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                                <_Input
                                    type={typeInput}
                                    placeholder="Senha .."
                                    disabled={enable}
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                                <VisibilityContainer>
                                    <div>
                                        <Icon typeInput={typeInput} setTypeInput={setTypeInput} />
                                    </div>
                                </VisibilityContainer>
                            </InputDiv>
                            {isLoading ? (
                                <BoxButton marginTopButton={"120px"}>
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
                                <BoxButton marginTopButton={"120px"}>
                                    <SendUserInfo type="subimit">
                                        <h2>Entrar</h2>
                                    </SendUserInfo>
                                </BoxButton>
                            }
                        </BoxSingInAndSingUp>
                    </BoxContainer>
                    <ImageContainer>
                        <ImageLogin src={loginGuy} alt="pessoas com gráfico" />
                    </ImageContainer>
                </LoginContainer>
            </PageForm>
        </>
    );
}

export default Login;