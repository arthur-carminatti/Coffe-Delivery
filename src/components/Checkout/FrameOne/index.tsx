import { CurrencyDollar, MapPin } from "phosphor-react";
import {
    BoxAdressContainer,
    BoxOneCheckoutContainer,
    BoxPayContainer,
    FrameOneContainer,
    InputBoxAdressContainer,
    TitleAdressContainer,
    TitleBoxAdressContainer,
    TitleBoxPayContainer,
    TitleCheckoutContainer,
    TitlePayContainer,
} from "./styles";

export function FrameOne() {
    return (
        <FrameOneContainer>
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

                <BoxPayContainer>
                    <TitleBoxPayContainer>
                        <CurrencyDollar size={22} />
                        <TitlePayContainer>
                            <strong>Pagamento</strong>
                            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        </TitlePayContainer>
                    </TitleBoxPayContainer>
                </BoxPayContainer>
            </BoxOneCheckoutContainer>
        </FrameOneContainer>
    )
}