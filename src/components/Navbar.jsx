//Navigation Bar
import React from 'react';
import styled from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';//Signin
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';//Search

const Container = styled.div`
position:sticky;
top:0;
background-color: ${({theme}) =>theme.bgLighter};
height: 56px;
`;

const Wrapper = styled.div`
display: flex;
align-items: center;
height: 100%;
padding:0px 20px;
justify-content: flex-end;
position:relative;
`

const Search = styled.div`
width : 40% ;
position : absolute;
left : 0px;
right : 0px;
margin: auto;
display: flex;
align-items: center;
justify-content: space-between;
border:1px solid #ccc;
border-radius: 3px;
`

const Input = styled.input`
border:none;
background-color: transparent;
`

const Button = styled.button`
  padding  : 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 25px;// Making border circled
  font-weight: 500px;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-align: center;
  gap:5px;
`;

export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder='Search'/>
          <SearchOutlinedIcon/>
        </Search>
        <Button><AccountCircleIcon/>Sign in</Button>
      </Wrapper>
    </Container>
  )
}
