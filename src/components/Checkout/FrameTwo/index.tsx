import {
    BoxTwoCheckoutContainer,
    CoffeConfirmButtonContainer,
    CoffeDeliveryContainer,
    CoffeRemoveContainer,
    CoffeSelectedActionsContainer,
    CoffeSelectedContainer,
    CoffeSelectedDetailsContainer,
    CoffeSelectedInfoContainer,
    CoffeSummaryContainer,
    CoffeTotalContainer,
    CoffeTotalItensContainer,
    FrameTwoContainer,
    TitleTwoCheckoutContainer
} from "./styles";
import { Minus, Plus, Trash } from "phosphor-react";
import tradicionalCoffe from '../../../assets/tradicionalCoffe.svg'
import { CounterListCoffe } from "../../CoffeList/styles";

export function FrameTwo() {
    return (
        <FrameTwoContainer>
            <TitleTwoCheckoutContainer>
                Cafés selecionados
            </TitleTwoCheckoutContainer>

            <BoxTwoCheckoutContainer>
                <CoffeSelectedContainer>
                    <CoffeSelectedInfoContainer>
                        <img src={tradicionalCoffe} alt="" />

                        <CoffeSelectedDetailsContainer>
                            <p>Expresso Tradicional</p>
                            <CoffeSelectedActionsContainer>
                                <CounterListCoffe>
                                    <button>
                                        <Minus size={14} weight="bold" />
                                    </button>
                                    <p>0</p>
                                    <button>
                                        <Plus size={14} weight="bold" />
                                    </button>
                                </CounterListCoffe>

                                <CoffeRemoveContainer>
                                    <p><Trash size={16} />Remover</p>
                                </CoffeRemoveContainer>
                            </CoffeSelectedActionsContainer>
                        </CoffeSelectedDetailsContainer>
                        <span>R$ 9,90</span>
                    </CoffeSelectedInfoContainer>

                    <CoffeSelectedInfoContainer>
                        <img src={tradicionalCoffe} alt="" />

                        <CoffeSelectedDetailsContainer>
                            <p>Expresso Tradicional</p>
                            <CoffeSelectedActionsContainer>
                                <CounterListCoffe>
                                    <button>
                                        <Minus size={14} weight="bold" />
                                    </button>
                                    <p>0</p>
                                    <button>
                                        <Plus size={14} weight="bold" />
                                    </button>
                                </CounterListCoffe>

                                <CoffeRemoveContainer>
                                    <p><Trash size={16} />Remover</p>
                                </CoffeRemoveContainer>
                            </CoffeSelectedActionsContainer>
                        </CoffeSelectedDetailsContainer>
                        <span>R$ 9,90</span>
                    </CoffeSelectedInfoContainer>

                </CoffeSelectedContainer>

                <CoffeSummaryContainer>
                    <CoffeTotalItensContainer>
                        <p>Total de itens</p>
                        <span>R$ 29,70</span>
                    </CoffeTotalItensContainer>

                    <CoffeDeliveryContainer>
                        <p>Entrega</p>
                        <span>R$ 3,50</span>
                    </CoffeDeliveryContainer>

                    <CoffeTotalContainer>
                        <p>Entrega</p>
                        <span>R$ 33,20</span>
                    </CoffeTotalContainer>
                </CoffeSummaryContainer>

                <CoffeConfirmButtonContainer>
                    <p>CONFIRMAR PEDIDO</p>
                </CoffeConfirmButtonContainer>
            </BoxTwoCheckoutContainer>
        </FrameTwoContainer>
    )
}