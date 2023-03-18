import { TopMenu, ImageHeight, HomeContent, WelcomeSide, TopText, SingUpButton, WelcomeText } from "./style";
import passwordGuy from "../../assets/imgs/passwordGuy.svg";

function HomePage() {
    return (
        <>
            <TopMenu>
                <div>
                    <TopText>Logo</TopText>
                    <TopText>sobre</TopText>
                </div>
                <div>
                    <TopText>login</TopText>
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