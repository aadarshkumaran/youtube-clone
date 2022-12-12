import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: calc(100vh - 56px);
color:${({ theme }) => theme.text}; 
`
const Wrapper = styled.div`
display: flex;
align-items: center;
flex-direction: column;
background-color:${({ theme }) => theme.bgLighter};
border: 1px solid ${({ theme }) => theme.soft}; 
padding: 20px 50px;
gap: 10px;
`
const Title = styled.h1`
font-size: 24px;
`

const Subtitle = styled.h2`
font-size: 20px;
font-weight: 300;
`

const Input = styled.input`
border: 1px solid ${({ theme }) => theme.soft}; 
border-radius: 3px;
padding: 10px;
background-color: transparent;
width: 100%;
`

const Button = styled.button`
border: none;
border-radius: 3px;
padding: 10px 20px;
font-weight: 500;
cursor: pointer;
background-color:${({ theme }) => theme.soft};
color:${({ theme }) => theme.textSoft};
`

const More = styled.div`
display: flex;
margin-top: 10px;
font-size: 12px;
color:${({ theme }) => theme.textSoft}; 
`

const Links = styled.div`
margin-left: 50px;
`

const Link = styled.span`
margin-left: 30px;
`

const SignIn = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Sign In</Title>
            <Subtitle>to continue using MixTube</Subtitle>
            <Input placeholder='Username'/>
            <Input type="password" placeholder='Password'/>
            <Button>Sign in</Button>
            <Title>or</Title>
            <Subtitle>Create an Account</Subtitle>
            <Input placeholder='Username'/>
            <Input placeholder='E-mail Address'/>
            <Input type="password" placeholder='Password'/>
            <Button>Sign up</Button>
        </Wrapper>
        <More>
            English(US)
            <Links>
                <Link>Help</Link>
                <Link>Privacy</Link>
                <Link>Terms</Link>
            </Links>
        </More>
    </Container>
  )
}

export default SignIn