import { IntroContainer, IntroTitleContainer, ItenOneIntroContainer, ItensInfoIntroContainer } from "./styles";
import imgIntro from '../../assets/imgIntro.svg'
import { ShoppingCart } from "@phosphor-icons/react";

export function Intro() {
    return (
        <IntroContainer >
            <IntroTitleContainer>
                <span>Encontre o café perfeito para qualquer hora do dia</span>
                <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
            </IntroTitleContainer>

            <img src={imgIntro} alt="" />

            <ItensInfoIntroContainer>
                <ItenOneIntroContainer>
                    <ShoppingCart size={16} weight="fill" />
                    <p>Compra simples e segura </p>
                </ItenOneIntroContainer>
            </ItensInfoIntroContainer>
        </IntroContainer>
    )
}