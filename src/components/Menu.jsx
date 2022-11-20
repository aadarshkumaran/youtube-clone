//Menu Design Module - Aadarsh 20.11.2022
import React from 'react'
import styled from 'styled-components';
import Mixtube from '../images/youtube-logo.png';
import HomeIcon from '@mui/icons-material/Home';//Home
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';//Subscriptions
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';//Videos
import HistoryIcon from '@mui/icons-material/History';//History
import AccountCircleIcon from '@mui/icons-material/AccountCircle';//Signin
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
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';//Dark/Light Theme



const Container = styled.div`
flex:1;
background-color: ${({theme}) =>theme.bg};
height: 128vh;
color: ${({theme}) =>theme.text};
font-style: 14px;
position: sticky;//our menu gets sticked eventhough the user scrolls down the page
top:0;
`;//Container for menu section

const Wrapper = styled.div`
    padding: 18px 26px;
`;//provide a default structure to display the child components.

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-family: Arial;
    font-weight: bold;
    margin-bottom: 25px;
`;//Logo Text Style

const Img = styled.img`
    height: 25px;
`;//Logo Image

const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 7px 0px;
`;//Menu Items

const Hr = styled.hr`
margin: 15px 0px;
border: 0.5px solid ${({theme}) =>theme.soft};
`; // horizontal rule

const Login = styled.div`
`;

const LoginButton = styled.button`
  padding  : 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 25px;// Making border circled
  font-weight: 500px;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-align: center;
  gap:5px;
`;

const Title = styled.text`
    font-size: 20px;
    color:${({theme}) =>theme.text};
    margin-bottom: 20px;
`

export const Menu = ({darkMode, setDarkMode}) => {
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
            <Login>Sign in to like videos, comment, and subscribe.
                <LoginButton><AccountCircleIcon/>Sign in</LoginButton>
            </Login>
            <Hr/>
            <Title>
            Explore
            </Title>
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
            <Item onClick={()=>setDarkMode(!darkMode)}>
                <SettingsBrightnessIcon/>
                Light Mode
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
