import React from 'react'
import styled from 'styled-components'
import Comment from './Comment'

const Container = styled.div``

const NewComment = styled.div`
display: flex;
align-items: center;
gap:10px;
`

const Avatar = styled.img`width: 50px;
height: 50px;
border-radius: 50%;`

const Input = styled.input`
border:none;
border-bottom: 1px solid ${({ theme }) => theme.soft};
background-color: transparent;
outline: none;
padding: 5px;
width: 100%;
color: ${({ theme }) => theme.text};
`


const Comments = () => {
  return (
    <Container>
    <NewComment>
        <Avatar img src='https://yt3.ggpht.com/vfVbKGrrGIuizrzSp8WylGf2iWykNuZGXFhx8N86UuS3Zqu7c0YChdZ4l11d38Y-vsX3mTqiDw=s900-c-k-c0x00ffffff-no-rj'/>
        <Input placeholder='Add a comment...'/>
    </NewComment>
    <Comment/>
    <Comment/>
    <Comment/>
    <Comment/>
    <Comment/>
    <Comment/>
    </Container>
  )
}

export default Comments