import styled from "styled-components";

export const CheckoutContainer = styled.main`
    width: 100%;
    display: flex;
`

export const FrameOneContainer = styled.div`
    border: 1px solid green;
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    min-width: 430px;
    margin-right: 32px;
    margin-left: 160px;
`

export const TitleCheckoutContainer = styled.div`
        width: 170px;
        height: 23px;

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
    min-width: 260px;
    border: 1px solid red;
`
export const BoxAdressContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px;
    gap: 32px;

    background: ${props => props.theme["white-200"]};
    border-radius: 6px;
`

export const TitleBoxAdressContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0px;

    svg {
        min-width: 22px;
        color: ${props => props.theme["yellow-700"]};
    }
`

export const TitleAdressContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 8px;
    gap: 2px;

    span {
        color: ${props => props.theme["black-600"]};
        font-size: 16px;
        font-style: normal;
        line-height: 130%;

        display: flex;
        font-weight: 400;
        align-items: center;
    }

    p {
        font-weight: 400;
        font-size: 14px;
        color: ${props => props.theme["gray-500"]};
        align-items: center;
        display: flex;
    }
`

export const InputBoxAdressContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px;
    gap: 16px;

    height: 216px;
`

export const BoxPayContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    gap: 32px;

    background: ${props => props.theme["white-200"]};
    border-radius: 6px;
`

export const TitleBoxPayContainer = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;

    svg {
        min-width: 22px;
        color: ${props => props.theme["purple-600"]};
    }
`

export const TitlePayContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 2px;

    strong {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 130%;

        display: flex;
        align-items: center;

        color: ${props => props.theme["black-600"]};
    }

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 130%;

        display: flex;
        align-items: center;

        color: ${props => props.theme["gray-500"]};
    }
`

export const FrameTwoContainer = styled.div`
    border: 1px solid red;
    width: 40%;
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 24px;
    min-width: 430px;
    margin-right: 160px;
`

export const TitleTwoCheckoutContainer = styled.div`
        width: 156px;
        height: 23px;
        display: flex;

        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;

        display: flex;
        align-items: center;

        color: ${props => props.theme["black-600"]};
`

export const BoxTwoCheckoutContainer = styled.div`
    border: 1px solid red;
    width: 100%;
    height: 100%;
    
    padding: 40px;
    background: ${props => props.theme["white-200"]};
    display: flex;
`

export const CoffeSelectedContainer = styled.div`
    border: 1px solid green;

    display: flex;
    justify-content: space-between;
    padding: 8px 4px;
    gap: 59px;

    width: 368px;
    height: 80px;

    background: ${props => props.theme["white-200"]};
`

export const CoffeSelectedInfoContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0px;
    gap: 20px;

    border: 1px solid green;

    width: 255px;
    height: 64px;

    img {
        width: 64px;
        height: 64px;
    }
`

export const CoffeSelectedDetailsContainer = styled.div`
    border: 1px solid red;
    display: flex;
    padding: 0px;
    gap: 8px;

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;

        display: flex;
        align-items: center;

        color: ${props => props.theme["black-600"]};
    }
`

export const CoffeRemoveContainer = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    padding: 8px;
    border-radius: 6px;

    width: 100px;
    height: 38px;

    background: ${props => props.theme["gray-100"]};

    button {
        background: transparent;
        border: 0;

        svg {
            color: ${props => props.theme["purple-600"]};
            margin-right: 5px;
        }
    }
`