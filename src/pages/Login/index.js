import loginGuy from "../../assets/imgs/login.png";
import { BoxSingInAndSingUp } from "../../assets/styles/globalStyles";
import {
    ImageContainer,
    LoginContainer
} from "./style";

function Login() {
    return (
        <>
            <LoginContainer>
                <BoxSingInAndSingUp>
                    <div>

                    </div>
                </BoxSingInAndSingUp>
                <ImageContainer>
                    <img src={loginGuy} alt="pessoas com gráfico" />
                </ImageContainer>
            </LoginContainer>
        </>
    );
}

export default Login;