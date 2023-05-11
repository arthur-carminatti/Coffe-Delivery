import { CoffeCard, CoffeListContainer, ListCoffe, TitleCoffeList } from "./styles";

export function CoffeList() {
    return (
        <CoffeListContainer>
            <TitleCoffeList>
                <p>Nossos cafés</p>
            </TitleCoffeList>

            <ListCoffe>
                <tbody>
                    <td>
                        <CoffeCard>Olá</CoffeCard>
                    </td>
                    <td>
                        <CoffeCard>Olá</CoffeCard>
                    </td>
                    <td>
                        <CoffeCard>Olá</CoffeCard>
                    </td>
                    <td>
                        <CoffeCard>Olá</CoffeCard>
                    </td>
                    <td>
                        <CoffeCard>Olá</CoffeCard>
                    </td>
                </tbody>
            </ListCoffe>
        </CoffeListContainer>
    )
}