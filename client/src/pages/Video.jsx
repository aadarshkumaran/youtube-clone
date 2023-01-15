import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import Comments from '../components/Comments';
import Card from '../components/Card';
import {useDispatch, useSelector} from 'react-redux'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { format } from 'timeago.js';
import { fetchSuccess } from '../redux/videoSlice';

const Container = styled.div`
display: flex;
gap: 24px;
color:${({ theme }) => theme.text};   
`;

const Content = styled.div`
flex: 5;
`;

const Channel = styled.div`
display : flex;
justify-content  : space-between ;
`;

const ChannelInfo = styled.div`
display: flex;
gap: 20px;
`;

const Subscribe = styled.button`
background-color : #cc1a00;
font-weight: 500;
color : white;
border: none;
border-radius:3px;
height: max-content;
padding: 10px 20px;
cursor: pointer;
`;

const ChannelImage = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
`;

const ChannelDetail = styled.div`
display:flex;
flex-direction: column;
`;

const ChannelName = styled.span`font-weight: 500;

`;

const ChannelCounter = styled.span`margin-top: 5px;margin-bottom: 20px;
color:${({ theme }) => theme.textSoft};  
font-size: 12px;
`;


const Description = styled.p`
font-size: 14px;
`;

const Recommendation = styled.div`
flex: 2;   
`;

const VideoWrapper = styled.div`   
`;

const Title = styled.h1`   
font-style: 18px;
font-weight: 600;
margin-top: 20px;
margin-bottom: 10px;
`;
const Details = styled.div`   
display: flex;
align-items: center;
justify-content: space-between;
`;
const Info = styled.span`   
`;
const Buttons = styled.div`   
display: flex;
gap: 20px;
`;
const Button = styled.div`   
display: flex;
align-items: center;
gap:5px;
cursor: pointer;
`;

const Hr = styled.hr`
margin: 15px 0px;
border:0.5px solid ${({ theme }) => theme.soft}; ;
`

export const Video = () => {
  const currentUser = useSelector((state) => state.user)
  const currentVideo = useSelector((state) => state.video.currentVideo)
  const dispatch = useDispatch()

  const path = useLocation().pathname.split("/")[2]

  const[channel,setChannel] = useState({})

  useEffect(()=>{
    const fetchData = async() =>{
      try {
        const videoRes = await axios.get(`/videos/find/${path}`)
        const channelRes = await axios.get(`/users/find/${videoRes.data.userId}`)
        setChannel(channelRes.data)
        dispatch(fetchSuccess(videoRes.data))
      } catch (err) {

      }
    }
    fetchData()
  },[path,dispatch])

  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe width="100%"
            height="720"
            src="https://www.youtube.com/embed/gfin-ab7qgs"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </VideoWrapper>
        <Title>{currentVideo.title}</Title>
        <Details>
          <Info>{currentVideo.views} views • {format(currentVideo.createdAt)} </Info>
          <Buttons>
            <Button><ThumbUpOutlinedIcon/>{currentVideo.likes?.length}</Button>
            <Button><ThumbDownOutlinedIcon/>Dislike</Button>
            <Button><ReplyOutlinedIcon style={{transform: "scaleX(-1)"}}/>Share</Button>
            <Button><PlaylistAddOutlinedIcon/>Save</Button>
          </Buttons>
        </Details>
        <Hr/>
        <Channel>
          <ChannelInfo>
            <ChannelImage src={channel.img}/>
            <ChannelDetail>
              <ChannelName>{channel.name}</ChannelName> 
              <ChannelCounter>{channel.subscribers} subscribers</ChannelCounter>
              <Description>{currentVideo.desc}</Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>Subscribe</Subscribe>
        </Channel>
        <Hr/>
        <Comments/>
      </Content>
      {/* <Recommendation>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
      </Recommendation> */}
    </Container>
  )
}


export default Video;