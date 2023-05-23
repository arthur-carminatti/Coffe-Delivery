import {
    ActionsBuyListCoffe,
    BuyListCoffe,
    CartListCoffe,
    CoffeCard,
    CoffeListContainer,
    CounterListCoffe,
    ListCoffe,
    TitleCoffeList
}
    from "./styles";

import tradicionalCoffe from '../../assets/tradicionalCoffe.svg'
import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { useState } from "react";

export function CoffeList() {
    const [coffeQuantity, setCoffeQuantity] = useState(0)

    function addCoffeQuantity() {
        if (coffeQuantity <= 98) {
            const addCoffe = coffeQuantity + 1
            setCoffeQuantity(addCoffe)
        }
        return
    }

    function removeCoffeQuantity() {
        if (coffeQuantity >= 1) {
            const removeCoffe = coffeQuantity - 1
            setCoffeQuantity(removeCoffe)
        }
        return
    }

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

                            <BuyListCoffe>
                                <p>R$<span>9,90</span></p>

                                <ActionsBuyListCoffe>
                                    <CounterListCoffe>
                                        <button onClick={removeCoffeQuantity}>
                                            <Minus size={14} weight="bold" />
                                        </button>
                                        <p>{coffeQuantity}</p>
                                        <button onClick={addCoffeQuantity}>
                                            <Plus size={14} weight="bold" />
                                        </button>
                                    </CounterListCoffe>

                                    <CartListCoffe>
                                        <ShoppingCartSimple size={22} weight="fill" />
                                    </CartListCoffe>
                                </ActionsBuyListCoffe>

                            </BuyListCoffe>
                        </CoffeCard>
                    </td>

                    <td>
                        <CoffeCard>
                            <img src={tradicionalCoffe} alt="" />
                            <section>Tradicional</section>
                            <strong>Expresso Tradicional</strong>
                            <p>O tradicional café feito com água quente e grãos moídos</p>

                            <BuyListCoffe>
                                <p>R$<span>9,90</span></p>

                                <ActionsBuyListCoffe>
                                    <CounterListCoffe>
                                        <button>
                                            <Minus size={14} weight="bold" />
                                        </button>
                                        <p>0</p>
                                        <button>
                                            <Plus size={14} weight="bold" />
                                        </button>
                                    </CounterListCoffe>

                                    <CartListCoffe>
                                        <ShoppingCartSimple size={22} weight="fill" />
                                    </CartListCoffe>
                                </ActionsBuyListCoffe>

                            </BuyListCoffe>
                        </CoffeCard>
                    </td>

                    <td>
                        <CoffeCard>
                            <img src={tradicionalCoffe} alt="" />
                            <section>Tradicional</section>
                            <strong>Expresso Tradicional</strong>
                            <p>O tradicional café feito com água quente e grãos moídos</p>

                            <BuyListCoffe>
                                <p>R$<span>9,90</span></p>

                                <ActionsBuyListCoffe>
                                    <CounterListCoffe>
                                        <button>
                                            <Minus size={14} weight="bold" />
                                        </button>
                                        <p>0</p>
                                        <button>
                                            <Plus size={14} weight="bold" />
                                        </button>
                                    </CounterListCoffe>

                                    <CartListCoffe>
                                        <ShoppingCartSimple size={22} weight="fill" />
                                    </CartListCoffe>
                                </ActionsBuyListCoffe>

                            </BuyListCoffe>
                        </CoffeCard>
                    </td>

                    <td>
                        <CoffeCard>
                            <img src={tradicionalCoffe} alt="" />
                            <section>Tradicional</section>
                            <strong>Expresso Tradicional</strong>
                            <p>O tradicional café feito com água quente e grãos moídos</p>

                            <BuyListCoffe>
                                <p>R$<span>9,90</span></p>

                                <ActionsBuyListCoffe>
                                    <CounterListCoffe>
                                        <button>
                                            <Minus size={14} weight="bold" />
                                        </button>
                                        <p>0</p>
                                        <button>
                                            <Plus size={14} weight="bold" />
                                        </button>
                                    </CounterListCoffe>

                                    <CartListCoffe>
                                        <ShoppingCartSimple size={22} weight="fill" />
                                    </CartListCoffe>
                                </ActionsBuyListCoffe>

                            </BuyListCoffe>
                        </CoffeCard>
                    </td>

                    <td>
                        <CoffeCard>
                            <img src={tradicionalCoffe} alt="" />
                            <section>Tradicional</section>
                            <strong>Expresso Tradicional</strong>
                            <p>O tradicional café feito com água quente e grãos moídos</p>

                            <BuyListCoffe>
                                <p>R$<span>9,90</span></p>

                                <ActionsBuyListCoffe>
                                    <CounterListCoffe>
                                        <button>
                                            <Minus size={14} weight="bold" />
                                        </button>
                                        <p>0</p>
                                        <button>
                                            <Plus size={14} weight="bold" />
                                        </button>
                                    </CounterListCoffe>

                                    <CartListCoffe>
                                        <ShoppingCartSimple size={22} weight="fill" />
                                    </CartListCoffe>
                                </ActionsBuyListCoffe>

                            </BuyListCoffe>
                        </CoffeCard>
                    </td>

                    <td>
                        <CoffeCard>
                            <img src={tradicionalCoffe} alt="" />
                            <section>Tradicional</section>
                            <strong>Expresso Tradicional</strong>
                            <p>O tradicional café feito com água quente e grãos moídos</p>

                            <BuyListCoffe>
                                <p>R$<span>9,90</span></p>

                                <ActionsBuyListCoffe>
                                    <CounterListCoffe>
                                        <button>
                                            <Minus size={14} weight="bold" />
                                        </button>
                                        <p>0</p>
                                        <button>
                                            <Plus size={14} weight="bold" />
                                        </button>
                                    </CounterListCoffe>

                                    <CartListCoffe>
                                        <ShoppingCartSimple size={22} weight="fill" />
                                    </CartListCoffe>
                                </ActionsBuyListCoffe>

                            </BuyListCoffe>
                        </CoffeCard>
                    </td>

                    <td>
                        <CoffeCard>
                            <img src={tradicionalCoffe} alt="" />
                            <section>Tradicional</section>
                            <strong>Expresso Tradicional</strong>
                            <p>O tradicional café feito com água quente e grãos moídos</p>

                            <BuyListCoffe>
                                <p>R$<span>9,90</span></p>

                                <ActionsBuyListCoffe>
                                    <CounterListCoffe>
                                        <button>
                                            <Minus size={14} weight="bold" />
                                        </button>
                                        <p>0</p>
                                        <button>
                                            <Plus size={14} weight="bold" />
                                        </button>
                                    </CounterListCoffe>

                                    <CartListCoffe>
                                        <ShoppingCartSimple size={22} weight="fill" />
                                    </CartListCoffe>
                                </ActionsBuyListCoffe>

                            </BuyListCoffe>
                        </CoffeCard>
                    </td>

                    <td>
                        <CoffeCard>
                            <img src={tradicionalCoffe} alt="" />
                            <section>Tradicional</section>
                            <strong>Expresso Tradicional</strong>
                            <p>O tradicional café feito com água quente e grãos moídos</p>

                            <BuyListCoffe>
                                <p>R$<span>9,90</span></p>

                                <ActionsBuyListCoffe>
                                    <CounterListCoffe>
                                        <button>
                                            <Minus size={14} weight="bold" />
                                        </button>
                                        <p>0</p>
                                        <button>
                                            <Plus size={14} weight="bold" />
                                        </button>
                                    </CounterListCoffe>

                                    <CartListCoffe>
                                        <ShoppingCartSimple size={22} weight="fill" />
                                    </CartListCoffe>
                                </ActionsBuyListCoffe>

                            </BuyListCoffe>
                        </CoffeCard>
                    </td>

                    <td>
                        <CoffeCard>
                            <img src={tradicionalCoffe} alt="" />
                            <section>Tradicional</section>
                            <strong>Expresso Tradicional</strong>
                            <p>O tradicional café feito com água quente e grãos moídos</p>

                            <BuyListCoffe>
                                <p>R$<span>9,90</span></p>

                                <ActionsBuyListCoffe>
                                    <CounterListCoffe>
                                        <button>
                                            <Minus size={14} weight="bold" />
                                        </button>
                                        <p>0</p>
                                        <button>
                                            <Plus size={14} weight="bold" />
                                        </button>
                                    </CounterListCoffe>

                                    <CartListCoffe>
                                        <ShoppingCartSimple size={22} weight="fill" />
                                    </CartListCoffe>
                                </ActionsBuyListCoffe>

                            </BuyListCoffe>
                        </CoffeCard>
                    </td>

                    <td>
                        <CoffeCard>
                            <img src={tradicionalCoffe} alt="" />
                            <section>Tradicional</section>
                            <strong>Expresso Tradicional</strong>
                            <p>O tradicional café feito com água quente e grãos moídos</p>

                            <BuyListCoffe>
                                <p>R$<span>9,90</span></p>

                                <ActionsBuyListCoffe>
                                    <CounterListCoffe>
                                        <button>
                                            <Minus size={14} weight="bold" />
                                        </button>
                                        <p>0</p>
                                        <button>
                                            <Plus size={14} weight="bold" />
                                        </button>
                                    </CounterListCoffe>

                                    <CartListCoffe>
                                        <ShoppingCartSimple size={22} weight="fill" />
                                    </CartListCoffe>
                                </ActionsBuyListCoffe>

                            </BuyListCoffe>
                        </CoffeCard>
                    </td>
                </tbody>
            </ListCoffe>
        </CoffeListContainer>
    )
}