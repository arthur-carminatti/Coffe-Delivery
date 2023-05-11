import {
    IntroAlignContainer,
    IntroContainer,
    IntroTitleContainer,
    ItenFourIntroContainer,
    ItenOneIntroContainer,
    ItenThreeIntroContainer,
    ItenTwoIntroContainer,
    ItensInfoIntroContainer
}
    from "./styles";
import {
    ShoppingCart,
    Package,
    Timer,
    Coffee
}
    from "@phosphor-icons/react";
import imgIntro from '../../assets/imgIntro.svg'

export function Intro() {
    return (
        <IntroAlignContainer>
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

                    <ItenTwoIntroContainer>
                        <Package size={16} weight="fill" />
                        <p>Embalagem mantém o café intacto </p>
                    </ItenTwoIntroContainer>

                    <ItenThreeIntroContainer>
                        <Timer size={16} weight="fill" />
                        <p>Entrega rápida e rastreada </p>
                    </ItenThreeIntroContainer>

                    <ItenFourIntroContainer>
                        <Coffee size={16} weight="fill" />
                        <p>O café chega fresquinho até você </p>
                    </ItenFourIntroContainer>
                </ItensInfoIntroContainer>
            </IntroContainer>
        </IntroAlignContainer>
    )
}