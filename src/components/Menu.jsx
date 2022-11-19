import React from 'react'
import styled from 'styled-components';
import Mixtube from '../images/youtube-logo.png';
import HomeIcon from '@mui/icons-material/Home';//Home
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';//Subscriptions
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';//Videos
import HistoryIcon from '@mui/icons-material/History';//History
import WhatshotIcon from '@mui/icons-material/Whatshot';//Trending
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';//Music
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';//Movies
import CellTowerIcon from '@mui/icons-material/CellTower';//Live
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';//Gaming
import NewspaperIcon from '@mui/icons-material/Newspaper';//news
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';//Sports
import LightbulbIcon from '@mui/icons-material/Lightbulb';//Learning
import CheckroomIcon from '@mui/icons-material/Checkroom';//Fashion
import AddCircleIcon from '@mui/icons-material/AddCircle';//Browse Channels
import SettingsIcon from '@mui/icons-material/Settings';//Settings
import FlagIcon from '@mui/icons-material/Flag';//Report History
import HelpIcon from '@mui/icons-material/Help';//Help
import FeedbackIcon from '@mui/icons-material/Feedback';//Report Feedback



const Container = styled.div`
flex:1;
background-color: #202020;
height: 120vh;
color: white;
font-style: 14px;
`;

const Wrapper = styled.div`
    padding: 18px 26px;
`

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-family: Arial;
    font-weight: bold;
    margin-bottom: 25px;
`
const Img = styled.img`
    height: 25px;
`

const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 7px 0px;
`

const Hr = styled.hr`
margin: 15px 0px;
border: 0.5px solid #373737;
` // horizontal rule

export const Menu = () => {
  return (
    <Container>
        <Wrapper>
            <Logo>
                <Img src={Mixtube}/>
                MixTube
            </Logo>
            <Item>
                <HomeIcon/>
                Home
            </Item>
            <Item>
                <SubscriptionsIcon/>
                Subscriptions
            </Item>
            <Hr/>
            <Item>
                <VideoLibraryIcon/>
                Library
            </Item>
            <Item>
                <HistoryIcon/>
                History
            </Item>
            <Hr/>
            <Item>
                <WhatshotIcon/>
                Trending
            </Item>
            <Item>
                <MusicNoteOutlinedIcon/>
                Music
            </Item>
            <Item>
                <LocalMoviesIcon/>
                Movies
            </Item>
            <Item>
                <CellTowerIcon/>
                Live
            </Item>
            <Item>
                <SportsEsportsIcon/>
                Gaming
            </Item>
            <Item>
                <NewspaperIcon/>
                News
            </Item>
            <Item>
                <EmojiEventsIcon/>
                Sports
            </Item>
            <Item>
                <LightbulbIcon/>
                Learning
            </Item>
            <Item>
                <CheckroomIcon/>
                Fashion and Beauty
            </Item>
            <Hr/>
            <Item>
                <AddCircleIcon/>
                Browse Channels
            </Item>
            <Hr/>
            <Item>
               <SettingsIcon/>
               Settings 
            </Item>
            <Item>
                <FlagIcon/>
                Report History
            </Item>
            <Item>
                <HelpIcon/>
                Help
            </Item>
            <Item>
                <FeedbackIcon/>
                Report Feedback
            </Item>
            <Hr/>
            <Item>
            About Press Copyright Contact us Creators Advertise Developers 
            Terms Privacy Policy & Safety How YouTube works Test new features
            © 2022 Google LLC.
            </Item>
        </Wrapper>
    </Container>
  )
}
