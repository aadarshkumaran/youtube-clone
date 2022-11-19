import React from 'react'
import styled from 'styled-components';
import Mixtube from '../images/youtube-logo.png';

const Container = styled.div`
flex:1;
background-color: #202020;
height: 100vh;
color: white;
`;

const Wrapper = styled.div`
    padding: 18px 26px;
`

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-family: Roboto Mono;
`
const Img = styled.img`
    height: 25px;
`

export const Menu = () => {
  return (
    <Container>
        <Wrapper>
            <Logo>
                <Img src={Mixtube}/>
                MixTube
            </Logo>
        </Wrapper>
    </Container>
  )
}
