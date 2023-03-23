import passwordGuy from "../../assets/imgs/passwordGuy.svg";
import logo from "../../assets/imgs/logo.png";
import {
    TopMenu,
    Logo,
    ImageHeight,
    HomeContent,
    WelcomeSide,
    TopText,
    SingUpButton,
    WelcomeText,
    StyledLink
} from "./style";



function HomePage() {

    return (
        <>
            <TopMenu>
                <div>
                    <TopText>logo</TopText>
                    <TopText>sobre</TopText>
                </div>
                <div>
                    <TopText>
                        <StyledLink to={"/sing-in"}>
                            login
                        </StyledLink>
                    </TopText>
                    <SingUpButton>
                        <h2>cadastro</h2>
                    </SingUpButton>
                </div>
            </TopMenu>
            <HomeContent>
                <WelcomeSide>
                    <WelcomeText>
                        <h1>Bem-Vindo ao Kepper</h1>
                        <h2>O lugar mais rápido de encontrar suas senhas</h2>
                    </WelcomeText>
                </WelcomeSide>
                <div>
                    <ImageHeight src={passwordGuy} alt="pessoas com gráfico" />
                </div>
            </HomeContent>
        </>
    );
}

export default HomePage;