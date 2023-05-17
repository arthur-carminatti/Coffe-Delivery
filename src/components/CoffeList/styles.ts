import styled from "styled-components";

export const CoffeListContainer = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const TitleCoffeList = styled.div`
    width: 100vw;
    height: 100px;
    display: flex;
    align-items: center;

    padding-left: 9.375rem;

    p {
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 800;
        font-size: 32px;
        line-height: 130%;

        display: flex;
        align-items: center;

        width: 193px;
        height: 42px;

        color: ${props => props.theme["black-600"]}
    }
`

export const ListCoffe = styled.table`
    width: 100%;
    height: 100%;
    display: flex;
    padding-left: 160px;
    padding-right: 160px;
    padding-top: 50px;
    
    td {
        margin-bottom: 40px;
        overflow-wrap: break-word;
        display: inline-block;
    }
`

export const CoffeCard = styled.tr`
    width: 256px;
    height: 310px;
    display: flex;
    border-radius: 6px;
    margin-right: 60px;
    align-items: center;
    flex-direction: column;
    gap: 12px;

    transition: 0.5s;

    img {
        width: 120px;
        height: 120px;
        margin-top: -20px;
        transition: 0.5s;
        
        &:hover {
            width: 140px;
            height: 140px;
            margin-top: -30px;
        }
    }

    section {
        justify-content: center;
        display: flex;
        padding: 4px 8px;
        border-radius: 9999px;
        
        background-color: ${props => props.theme["yellow-100"]};
        color: ${props => props.theme["yellow-700"]};

        font-weight: 700;
        font-size: 12px;
        line-height: 130%;
        text-transform: uppercase;

        transition: 0.7s;

        &:hover {
            background-color: ${props => props.theme["yellow-700"]};
            color: ${props => props.theme["yellow-100"]};
        }
    }

    strong {
        color: ${props => props.theme["black-600"]};
        font-weight: 700;
        font-size: 20px;
        font-family: 'Baloo 2';
        align-items: center;

        padding: 4px 8px;
    }

    p {
        text-align: center;
        color: ${props => props.theme["gray-300"]};
    }
`

export const BuyListCoffe = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    margin-top: 20px;
    gap: 29px;
    height: 38px;

    p {
        color: ${props => props.theme["gray-500"]};
        font-weight: 400;
        font-size: 18px;
        line-height: 130%;
    }

    span {
        padding: 5px;
        font-weight: 800;
        font-size: 22px;
    }
`

export const ActionsBuyListCoffe = styled.div`
    display: flex;
    align-items: center;
    padding: 0px;
    gap: 8px;
    
    width: 118px;
    height: 38px;
`

export const CounterListCoffe = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    gap: 4px;
    border-radius: 6px;

    width: 72px;
    height: 38px;

    background: ${props => props.theme["gray-100"]};

    button {
        background: transparent;
        border: 0;

        svg {
            color: ${props => props.theme["purple-600"]};
        }
    }

    p {
        font-size: 16px;
        line-height: 130%;
        text-align: center;

        color: ${props => props.theme["black-800"]};
    }
`

export const CartListCoffe = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 8px;
    border-radius: 6px;

    width: 38px;
    height: 38px;

    background: ${props => props.theme["purple-700"]};

    svg {
        color: ${props => props.theme["white-200"]};
    }
`