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

import { useContext } from 'react'
import { CoffeContext } from '../../contexts/CoffesQuantityContext'

interface CoffesProps {
    id: string,
    name: string,
    subName: string,
    description: string,
    price: string
}

export function CoffeList() {
    const { coffeQuantities, setCoffeQuantities } = useContext(CoffeContext)
    const [coffes, setCoffes] = useState<CoffesProps[]>([])

    function addCoffeQuantity(coffeId: string) {
        const currentQuantity = coffeQuantities[coffeId] || 0
        const newQuantity = currentQuantity + 1

        if (newQuantity <= 99) {
            const newQuantities = { ...coffeQuantities, [coffeId]: newQuantity }
            setCoffeQuantities(newQuantities)
        }
    }

    function removeCoffeQuantity(coffeId: string) {
        const currentQuantity = coffeQuantities[coffeId] || 0
        const newQuantity = currentQuantity - 1

        if (newQuantity >= 0) {
            const newQuantities = { ...coffeQuantities, [coffeId]: newQuantity }
            setCoffeQuantities(newQuantities)
        }
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
                        const quantity = coffeQuantities[coffe.id] || 0

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
                                                <button onClick={() => removeCoffeQuantity(coffe.id)}>
                                                    <Minus size={14} weight="bold" />
                                                </button>
                                                <p>{quantity}</p>
                                                <button onClick={() => addCoffeQuantity(coffe.id)}>
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