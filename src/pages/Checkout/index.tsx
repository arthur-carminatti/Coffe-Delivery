import { CurrencyDollar, MapPin, Minus, Plus, Trash } from "phosphor-react";
import tradicionalCoffe from '../../assets/tradicionalCoffe.svg'
import {
    BoxAdressContainer,
    BoxOneCheckoutContainer,
    BoxPayContainer,
    BoxTwoCheckoutContainer,
    CheckoutContainer,
    CoffeRemoveContainer,
    CoffeSelectedActionsContainer,
    CoffeSelectedContainer,
    CoffeSelectedDetailsContainer,
    CoffeSelectedInfoContainer,
    FrameOneContainer,
    FrameTwoContainer,
    InputBoxAdressContainer,
    TitleAdressContainer,
    TitleBoxAdressContainer,
    TitleBoxPayContainer,
    TitleCheckoutContainer,
    TitlePayContainer,
    TitleTwoCheckoutContainer
} from "./styles";
import { CounterListCoffe } from "../../components/CoffeList/styles";

export function Checkout() {
    return (
        <CheckoutContainer>
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
                </BoxTwoCheckoutContainer>
            </FrameTwoContainer>
        </CheckoutContainer>
    )
}