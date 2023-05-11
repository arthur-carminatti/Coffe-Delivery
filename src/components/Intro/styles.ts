import styled from "styled-components";

export const IntroContainer = styled.section`
    width: 100%;
    height: 544px;

    img {
        position: absolute;
        width: 476px;
        height: 360px;
        left: calc(50% - 476px/2 + 322px);
        top: calc(50% - 360px/2);
    }
`

export const IntroTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;

    position: absolute;
    width: 588px;
    height: 192px;
    left: calc(50% - 588px/2 - 266px);
    top: calc(50% - 192px/2 - 82px);

    span {
        font-weight: 800;
        font-size: 48px;
        line-height: 130%;

        width: 588px;
        height: 124px;
        align-self: stretch;

        color: ${props => props.theme["black-800"]};
    }
    
    p {
        font-weight: 400;
        font-size: 20px;
        line-height: 130%;

        width: 588px;
        height: 52px;

        font-stretch: 100;

        color: ${props => props.theme["black-600"]};
    }
`

export const ItensInfoIntroContainer = styled.div`
    position: absolute;
    width: 567px;
    height: 84px;
    left: calc(50% - 567px/2 - 276.5px);
    top: calc(50% - 84px/2 + 122px);
`

export const ItenOneIntroContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px;
    gap: 12px;

    position: absolute;
    width: 231px;
    height: 32px;
    left: 0px;
    top: 0px;

    p {
        color: ${props => props.theme["gray-500"]};
        font-size: 16px;
    }

    svg {
        background: ${props => props.theme["yellow-700"]};
        color: white;
        border-radius: 99999px;
        padding: 8px;
        width: 32px;
        height: 32px;
    }
`

export const ItenTwoIntroContainer = styled(ItenOneIntroContainer)`
    width: 294px;
    left: 271px;

    svg {
        background: ${props => props.theme["gray-500"]};
    }
`

export const ItenThreeIntroContainer = styled(ItenOneIntroContainer)`
    width: 231px;
    height: 32px;
    left: 0px;
    top: 52px;

    svg {
        background: ${props => props.theme["yellow-500"]};
    }
`

export const ItenFourIntroContainer = styled(ItenOneIntroContainer)`
    width: 294px;
    left: 265px;
    top: 52px;

    svg {
        background: ${props => props.theme["purble-600"]};
    }
`
