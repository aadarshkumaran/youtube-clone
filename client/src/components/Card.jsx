import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import { Link, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { format } from 'timeago.js';
import axios from 'axios';

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


const Card = ({type,video}) => {
  const[channel,setChannel] = useState({})

  useEffect(()=>{
    const fetchChannel = async() =>{
      const res = await axios.get(`/users/find/${video.userId}`)
      setChannel(res.data)
    }
    fetchChannel()
  },[video.userId])
  return (
    <Link to={`/video/${video._id}`} style={{textDecoration:"none"}}>
    <Container type={type}>
        <Image type={type} src={video.thumbnail}/>
        <Details type={type}>
          <ChannelLogo type={type} src={channel.img}/>
          <Texts>
            <Title style={{margin: "3px 0px"}}>{video.title}</Title>
            <ChannelName style={{margin: "8px 0px"}}>{channel.name}</ChannelName>
            <Info style={{margin: "8px 0px"}}>{video.views} views • {format(video.createdAt)}</Info>
          </Texts>
        </Details>
    </Container>
    </Link>
  )
}

export default Card