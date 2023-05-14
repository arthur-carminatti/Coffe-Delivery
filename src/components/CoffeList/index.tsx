import {
    CoffeCard,
    CoffeListContainer,
    ListCoffe,
    TitleCoffeList
}
    from "./styles";

import tradicionalCoffe from '../../assets/tradicionalCoffe.svg'

export function CoffeList() {
    return (
        <CoffeListContainer>
            <TitleCoffeList>
                <p>Nossos cafés</p>
            </TitleCoffeList>

            <ListCoffe>
                <tbody>
                    <td>
                        <CoffeCard>
                            <img src={tradicionalCoffe} alt="" />
                            <section>Tradicional</section>
                            <strong>Expresso Tradicional</strong>
                            <p>O tradicional café feito com água quente e grãos moídos</p>
                        </CoffeCard>
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