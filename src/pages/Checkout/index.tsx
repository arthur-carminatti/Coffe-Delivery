import { MapPin } from "phosphor-react";
import {
    BoxAdressContainer,
    BoxOneCheckoutContainer,
    CheckoutContainer,
    InputBoxAdressContainer,
    TitleAdressContainer,
    TitleBoxAdressContainer,
    TitleCheckoutContainer
} from "./styles";

export function Checkout() {
    return (
        <CheckoutContainer>
            <TitleCheckoutContainer>
                Complete seu pedido
            </TitleCheckoutContainer>

            <BoxOneCheckoutContainer>
                <BoxAdressContainer>
                    <TitleBoxAdressContainer>
                        <MapPin size={22} />
                        <TitleAdressContainer>
                            <span>Endereço de Entrega</span>
                            <p>Informe o endereço onde deseja receber seu pedido</p>
                        </TitleAdressContainer>
                    </TitleBoxAdressContainer>

                    <InputBoxAdressContainer>
                        <input type="text" />
                    </InputBoxAdressContainer>
                </BoxAdressContainer>
            </BoxOneCheckoutContainer>
        </CheckoutContainer>
    )
}