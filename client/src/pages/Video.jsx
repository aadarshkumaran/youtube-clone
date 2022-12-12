import React from 'react'
import styled from 'styled-components'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import Comments from '../components/Comments';
import Card from '../components/Card';

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
        <Title>Valorant live india just chating match at 7 clock greyfox esports</Title>
        <Details>
          <Info>7,987,964,313 views • 1 hour ago</Info>
          <Buttons>
            <Button><ThumbUpOutlinedIcon/>123</Button>
            <Button><ThumbDownOutlinedIcon/>Dislike</Button>
            <Button><ReplyOutlinedIcon style={{transform: "scaleX(-1)"}}/>Share</Button>
            <Button><PlaylistAddOutlinedIcon/>Save</Button>
          </Buttons>
        </Details>
        <Hr/>
        <Channel>
          <ChannelInfo>
            <ChannelImage src='https://yt3.ggpht.com/vfVbKGrrGIuizrzSp8WylGf2iWykNuZGXFhx8N86UuS3Zqu7c0YChdZ4l11d38Y-vsX3mTqiDw=s900-c-k-c0x00ffffff-no-rj'/>
            <ChannelDetail>
              <ChannelName>Khelthuzad</ChannelName>
              <ChannelCounter>2.48k subscribers</ChannelCounter>
              <Description> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus nam cum neque veniam adipisci dolorem alias nobis quas, dolor dolores aperiam pariatur molestiae expedita! Officiis doloribus nulla eum aperiam tempore! </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>Subscribe</Subscribe>
        </Channel>
        <Hr/>
        <Comments/>
      </Content>
      <Recommendation>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
      </Recommendation>
    </Container>
  )
}


export default Video;