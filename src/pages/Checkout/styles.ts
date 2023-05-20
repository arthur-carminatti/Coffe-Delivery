import styled from "styled-components";

export const CheckoutContainer = styled.main`
    width: 100%;
`

export const TitleCheckoutContainer = styled.div`
        width: 170px;
        height: 23px;
        margin-left: 160px;

        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 130%;

        display: flex;
        align-items: center;

        color: ${props => props.theme["black-600"]};
`

export const BoxOneCheckoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px;
    gap: 12px;
    width: 640px;
    height: 591px;
    margin-left: 160px;
    margin-top: 15px;

    border: 1px solid red;
`
export const BoxAdressContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px;
    gap: 32px;

    width: 640px;
    height: 372px;

    border: 1px solid red;

    background: ${props => props.theme["white-200"]};
    border-radius: 6px;
`

export const TitleBoxAdressContainer = styled.div`
    display: flex;
    padding: 0px;

    width: 560px;
    height: 44px;

    border: 1px solid red;

    svg {
        color: ${props => props.theme["yellow-700"]};
    }
`

export const TitleAdressContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 8px;
    gap: 2px;

    width: 530px;
    height: 44px;

    span {
        color: ${props => props.theme["black-600"]};
        font-size: 16px;
        font-style: normal;
        line-height: 130%;

        display: flex;
        font-weight: 400;
        align-items: center;

        width: 530px;
    }

    p {
        font-weight: 400;
        font-size: 14px;
        color: ${props => props.theme["gray-500"]};
        align-items: center;

        width: 530px;
    }
`

export const InputBoxAdressContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px;
    gap: 16px;

    border: 1px solid red;

    width: 560px;
    height: 216px;
`