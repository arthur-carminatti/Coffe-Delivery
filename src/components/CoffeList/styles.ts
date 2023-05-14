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
    border: 1px solid red;
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
    border: 1px solid red;
    border-radius: 6px;
    margin-right: 32px;
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