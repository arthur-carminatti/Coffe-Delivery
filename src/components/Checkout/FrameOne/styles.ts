import styled from "styled-components";

export const FrameOneContainer = styled.div`
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