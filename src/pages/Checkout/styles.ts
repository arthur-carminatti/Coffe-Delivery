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
    border-radius: 6px 44px;
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
    border-radius: 6px 44px;
    width: 100%;
    height: 100%;
    
    padding: 40px;
    background: ${props => props.theme["white-200"]};
    display: flex;
    flex-direction: column;

    gap: 48px;
`

export const CoffeSelectedContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 8px 4px;
    border-radius: 6px;
    gap: 20px;

    background: ${props => props.theme["white-200"]};
`

export const CoffeSelectedInfoContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0px;
    gap: 20px;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 1px solid #E6E5E5;
    padding-bottom: 20px;

    img {
        width: 64px;
        height: 64px;
    }

    span {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 130%;

        display: flex;
        align-items: center;
        text-align: right;

        color: #574F4D;
    }
`

export const CoffeSelectedActionsContainer = styled.div`
    display: flex;
    padding: 0px;
    gap: 8px;

    p {
        display: flex;
        align-items: center;

        color: ${props => props.theme["black-600"]};
    }
`

export const CoffeRemoveContainer = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 6px;
    font-size: 12px;
    text-transform: uppercase;

    border: 0;

    background: ${props => props.theme["gray-100"]};

    svg {
            color: ${props => props.theme["purple-600"]};
            margin-right: 5px;
        }
`

export const CoffeSelectedDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
`

export const CoffeSummaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 12px;

    width: 368px;
    height: 92px;
`

export const CoffeTotalItensContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 8px;

    width: 368px;
    height: 21px;

    P {
        font-size: 14px;
        display: flex;
        align-items: center;
        color: #574F4D;
    }

    span {
        font-weight: 400;
        font-size: 16px;
        display: flex;
        align-items: center;
        color: #574F4D;
    }
`

export const CoffeDeliveryContainer = styled(CoffeTotalItensContainer)`
`

export const CoffeTotalContainer = styled(CoffeTotalItensContainer)`
    p {
        font-weight: 700;
        font-size: 20px;

        display: flex;
        align-items: center;

        color: #403937;
    }

    span {
        font-weight: 700;
        font-size: 20px;

        display: flex;
        align-items: center;

        color: #403937;
    }
`

export const CoffeConfirmButtonContainer = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 8px;
    gap: 4px;
    border: 0;

    width: 368px;
    height: 46px;

    background: #DBAC2C;
    border-radius: 6px;

    p {
        font-weight: 700;
        font-size: 14px;
        line-height: 160%;

        text-transform: uppercase;

        color: #FFFFFF;
    }
`