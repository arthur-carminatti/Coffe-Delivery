import styled from "styled-components";

export const IntroAlignContainer = styled.div`
    width: 100%;
    height: 34rem;
    position: fixed;
`

export const IntroContainer = styled.section`
    width: 100%;
    height: 34rem;

    img {
        position: absolute;
        width: 29.75rem;
        height: 22.5rem;
        left: calc(50% - 29.75rem/2 + 20.125rem);
        top: calc(50% - 22.5rem/2);
    }
`

export const IntroTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 1rem;

    position: absolute;
    width: 36.75rem;
    height: 12rem;
    left: calc(50% - 36.75rem/2 - 16.625rem);
    top: calc(50% - 12rem/2 - 5.125rem);

    span {
        font-weight: 800;
        font-size: 3rem;
        line-height: 130%;

        width: 36.75rem;
        height: 7.75rem;
        align-self: stretch;

        color: ${props => props.theme["black-800"]};
    }
    
    p {
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 130%;

        width: 36.75rem;
        height: 3.25rem;

        font-stretch: 100;

        color: ${props => props.theme["black-600"]};
    }
`

export const ItensInfoIntroContainer = styled.div`
    position: absolute;
    width: 35.438rem;
    height: 5.25rem;
    left: calc(50% - 35.438rem/2 - 17.281rem);
    top: calc(50% - 5.25rem/2 + 7.625rem);
`

export const ItenOneIntroContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px;
    gap: 0.75rem;

    position: absolute;
    width: 14.438rem;
    height: 2rem;
    left: 0px;
    top: 0px;

    p {
        color: ${props => props.theme["gray-500"]};
        font-size: 1rem;
    }

    svg {
        background: ${props => props.theme["yellow-700"]};
        color: white;
        border-radius: 99999px;
        padding: 0.5rem;
        width: 2rem;
        height: 2rem;
    }
`

export const ItenTwoIntroContainer = styled(ItenOneIntroContainer)`
    width: 18.375rem;
    left: 16.938rem;

    svg {
        background: ${props => props.theme["gray-500"]};
    }
`

export const ItenThreeIntroContainer = styled(ItenOneIntroContainer)`
    width: 14.438rem;
    height: 2rem;
    left: 0px;
    top: 3.25rem;

    svg {
        background: ${props => props.theme["yellow-500"]};
    }
`

export const ItenFourIntroContainer = styled(ItenOneIntroContainer)`
    width: 18.375rem;
    left: 16.563rem;
    top: 3.25rem;

    svg {
        background: ${props => props.theme["purble-600"]};
    }
`
