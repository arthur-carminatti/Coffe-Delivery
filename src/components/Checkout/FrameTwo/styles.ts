import styled from "styled-components"

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
    
    padding: 40px;
    background: ${props => props.theme["white-200"]};
    display: flex;
    flex-direction: column;

    gap: 48px;
`

export const CoffeSelectedContainer = styled.div`
    display: flex;
    flex-direction: column;
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
        justify-content: end;
        align-items: center;

        color: #574F4D;
        width: 150px;
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
    padding: 0px;
    gap: 8px;
    margin-left: 15px;
    width: 100%;
`

export const CoffeSummaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 12px;
`

export const CoffeTotalItensContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 8px;

    width: 100%;

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