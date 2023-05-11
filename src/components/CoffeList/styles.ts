import styled from "styled-components";

export const CoffeListContainer = styled.main`
    width: 100vw;
    height: 100vh;
    border: 1px solid red;
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
    border: 1px solid red;

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
    display: inline-block;
    border: 1px solid red;
    margin-right: 32px;
`