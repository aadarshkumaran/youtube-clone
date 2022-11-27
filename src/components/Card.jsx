import React from 'react'
import styled from 'styled-components'
import { Link, Route, Routes } from 'react-router-dom';

const Container = styled.div`
color: ${({theme}) =>theme.text};
width: 360px;
margin-bottom: 45px;
cursor: pointer;
`

//thumbnail
const Image = styled.img`
color: ${({theme}) =>theme.text};
width: 100%;
height: 202px;
background-color: #999;
border-radius: 5px;
`
const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`
const ChannelLogo = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`

const Texts = styled.div`
 `

const Title = styled.h2`
font-size: 14px;
font-weight: 500px;
color: ${({theme}) =>theme.text};

`

const ChannelName = styled.text`
font-style: 14px;
color: ${({theme}) =>theme.textSoft};
margin: 9px 0px;
`

const Info = styled.div`
font-style: 14px;
color: ${({theme}) =>theme.textSoft};
`


const Card = () => {
  return (
    <Link to="/video/test" style={{textDecoration:"none"}}>
    <Container>
        <Image src="https://i.ytimg.com/vi/GUCOx-J4xZI/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLD1MB_1S2kLGTL_0ISw19zn8eqAfw"/>
        <Details>
          <ChannelLogo src="https://yt3.ggpht.com/vfVbKGrrGIuizrzSp8WylGf2iWykNuZGXFhx8N86UuS3Zqu7c0YChdZ4l11d38Y-vsX3mTqiDw=s900-c-k-c0x00ffffff-no-rj"/>
          <Texts>
            <Title style={{margin: "3px 0px"}}>Valorant live india just chating match at 7 clock greyfox esports</Title>
            <ChannelName style={{margin: "8px 0px"}}>Khelthuzad</ChannelName>
            <Info style={{margin: "8px 0px"}}>1M views • 1 hour ago</Info>
          </Texts>
        </Details>
    </Container>
    </Link>
  )
}

export default Card