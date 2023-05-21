import styled from "styled-components";

export const SuccessMarginContainer = styled.main`
    width: 100%;
    display: flex;
    gap: 102px;
`

export const SuccessContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    margin-left: 160px;
    width: 40%;

    min-width: 500px;

    h2 {
        margin-top: 10px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;

        color: #403937;
        font-stretch: 100;
    }

    h1 {
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 800;
        font-size: 32px;
        line-height: 130%;
        
        display: flex;

        color: #C47F17;
    }
`

export const OrderInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    gap: 32px;

    margin-top: 40px;

    max-width: 526px;

    border: 1px solid;
    border-radius: 6px 36px;
    border-bottom-color: rgba(128, 71, 248, 1);
    border-top-color: rgba(219, 172, 44, 1);
    border-left-color: #C47F17;
    border-right-color: red;
`

export const LocalOrderInfoContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0px;
    gap: 12px;

    svg {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 8px;
        gap: 8px;
        min-width: 32px;
        height: 32px;

        color: white;
        background: #8047F8;
        border-radius: 1000px;
    }

    p {
        font-size: 16px;

        color: #574F4D;
    }

    span {
        font-weight: bold;
        font-size: 16px;

        color: #574F4D;
    }
`

export const TimeOrderInfoContainer = styled(LocalOrderInfoContainer)`
    svg {
        background: #DBAC2C;
    }
`

export const SuccessImgContainer = styled.main`
    display: flex;
    height: 600px;
    margin-top: 100px;
    margin-right: 160px;
    width: 50%;
    align-items: center;
    justify-content: center;

    min-width: 500px;

    img {
        margin-bottom: 130px;
    }
`