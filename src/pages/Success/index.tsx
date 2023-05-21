import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { LocalOrderInfoContainer, OrderInfoContainer, SuccessContainer, SuccessImgContainer, SuccessMarginContainer, TimeOrderInfoContainer } from "./styles";
import imgSuccess from '../../assets/imgSuccess.svg'

export function Success() {
    return (
        <SuccessMarginContainer>
            <SuccessContainer>
                <h1>Uhu! Pedido confirmado</h1>
                <h2>Agora é só aguardar que logo o café chegará até você</h2>

                <OrderInfoContainer>
                    <LocalOrderInfoContainer>
                        <MapPin size={22} weight="fill" />
                        <p>Entrega em: <span>Rua João Daniel Martinelli, 102 Farrapos - Porto Alegre, RS</span></p>
                    </LocalOrderInfoContainer>

                    <TimeOrderInfoContainer>
                        <Timer size={22} weight="fill" />
                        <p>Previsão de entrega: <span>20 min - 30 min</span></p>
                    </TimeOrderInfoContainer>

                    <LocalOrderInfoContainer>
                        <CurrencyDollar size={22} weight="fill" />
                        <p>Pagamento na entrega: <span>Cartão de Crédito</span></p>
                    </LocalOrderInfoContainer>
                </OrderInfoContainer>
            </SuccessContainer>

            <SuccessImgContainer>
                <img src={imgSuccess} alt="" />
            </SuccessImgContainer>
        </SuccessMarginContainer>
    )
}