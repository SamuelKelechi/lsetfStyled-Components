import styled from 'styled-components'


export const MainContain = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const CardHold = styled.span`
    height: 350px;
    width: 350px;
    background-color: red;
    display: flex;
    flex-direction: column;
    align-items: center;

    :hover{
        background-color: green;
    }

    @media screen and (max-width: 650px){
        background-color: purple;
    }
`
 
export const ImageHold = styled.img`
    height: 90px;
    width: 90px;
`

export const Header = styled.h2`

`
export const Para = styled.p`

`