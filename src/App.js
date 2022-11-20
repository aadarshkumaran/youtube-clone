import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import './Utils/Theme.js';
import { Menu } from './components/Menu';
import { Navbar } from './components/Navbar';
import { darkTheme, lightTheme } from './Utils/Theme.js';
import { useState } from 'react';

const Container = styled.div`
display : flex;
`;
const Main = styled.div`
flex : 7;
background-color : ${({theme}) =>theme.bg};
color: white;
`;
const Wrapper = styled.div``;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <Container>
      <Menu darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Main>
        <Navbar/>
        <Wrapper>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
        </Wrapper>
      </Main>
    </Container>
    </ThemeProvider>
  );
}

export default App;
