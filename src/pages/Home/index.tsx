import { CoffeList } from "../../components/CoffeList";
import { Intro } from "../../components/Intro";
import { HomeContainer } from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <Intro />
            <CoffeList />
        </HomeContainer>
    )
}