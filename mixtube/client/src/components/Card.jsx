import React from 'react'
import styled from 'styled-components'
// import { Link, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Container = styled.div`
color: ${({theme}) =>theme.text};
width: ${(props)=>props.type !== "sm" && "360px"};
margin-bottom: ${(props)=>props.type === "sm" ? "10px" : "45px"};
cursor : pointer;
display: ${(props)=>props.type === "sm" && "flex"};
gap: 10px;
`

//thumbnail
const Image = styled.img`
width: 100%;
height: ${(props)=>props.type === "sm" ? "120px" : "202px"};
background-color: #999;
border-radius: 5px;
flex:1;
`
const Details = styled.div`
  display: flex;
  margin-top: ${(props)=>props.type !== "sm" && "16px"};
  gap: 12px;
  flex:1;
`
const ChannelLogo = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props)=>props.type === "sm" && "none"};
`

const Texts = styled.div`
 `

const Title = styled.h2`
font-size: 14px;
font-weight: 500px;
color: ${({theme}) =>theme.text};

`

const ChannelName = styled.text`
font-size: 14px;
color: ${({theme}) =>theme.textSoft};
margin: 9px 0px;
`

const Info = styled.div`
font-size: 14px;
color: ${({theme}) =>theme.textSoft};
`


const Card = ({type}) => {
  return (
    <Link to="/video/test" style={{textDecoration:"none"}}>
    <Container type={type}>
        <Image type={type} src="https://i.ytimg.com/vi/GUCOx-J4xZI/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLD1MB_1S2kLGTL_0ISw19zn8eqAfw"/>
        <Details type={type}>
          <ChannelLogo type={type} src="https://yt3.ggpht.com/vfVbKGrrGIuizrzSp8WylGf2iWykNuZGXFhx8N86UuS3Zqu7c0YChdZ4l11d38Y-vsX3mTqiDw=s900-c-k-c0x00ffffff-no-rj"/>
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