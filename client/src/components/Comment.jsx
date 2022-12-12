import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
gap: 10px;
margin: 30px 0px;
`
const Avatar = styled.img`width: 50px;
height: 50px;
border-radius: 50%;`

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: ${({ theme }) => theme.text};
`

const Name = styled.span`
font-size: 13px;
font-weight: 500;
`

const Date = styled.span`
font-size: 12px;
font-weight: 400;
color: ${({ theme }) => theme.textsoft};
margin-left: 5px ;
`

const Text = styled.span`font-size: 14px;`

const Comment = () => {
  return (
    <Container>
        <Avatar src="https://yt3.ggpht.com/vfVbKGrrGIuizrzSp8WylGf2iWykNuZGXFhx8N86UuS3Zqu7c0YChdZ4l11d38Y-vsX3mTqiDw=s900-c-k-c0x00ffffff-no-rj"/>
        <Details>
            <Name>Khelthuzad <Date>1 day ago</Date></Name>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium et blanditiis optio laborum error, possimus vitae itaque quae asperiores magnam facilis architecto dolores doloribus pariatur libero numquam, reprehenderit impedit quod!</Text>
        </Details>
    </Container>
  )
}

export default Comment