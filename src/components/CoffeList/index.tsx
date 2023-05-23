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
import { api } from "../../lib/axios";
import { useEffect } from 'react'

interface CoffesProps {
    id: number,
    name: string,
    subName: string,
    description: string,
    price: string
}

export function CoffeList() {
    const [coffeQuantity, setCoffeQuantity] = useState(0)
    const [coffes, setCoffes] = useState<CoffesProps[]>([])

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

    async function fetchCoffes() {
        const response = await api.get('Coffes')

        setCoffes(response.data)
    }

    useEffect(() => {
        fetchCoffes()
    }, [])

    return (
        <CoffeListContainer>
            <TitleCoffeList>
                <p>Nossos cafés</p>
            </TitleCoffeList>

            <ListCoffe>
                <tbody>
                    {coffes.map(coffe => {
                        return (
                            <td key={coffe.id}>
                                <CoffeCard>
                                    <img src={tradicionalCoffe} alt="" />
                                    <section>{coffe.name}</section>
                                    <strong>{coffe.subName}</strong>
                                    <p>{coffe.description}</p>

                                    <BuyListCoffe>
                                        <p>R$<span>{coffe.price}</span></p>

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
                        )
                    })}
                </tbody>
            </ListCoffe>
        </CoffeListContainer>
    )
}