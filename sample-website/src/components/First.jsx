import styled from "styled-components"
import React from 'react'
import Apple from './apple.png'

const Container = styled.div`
    height: calc(100vh - 50px);
    display: flex;
    padding: 10px;
    /* background-color: #FFDBDA; */
`
const Left = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    font-size: 20px;
    margin-top: 20px;
    width: 60%; 
`
const Button = styled.button`
    padding: 15px;
    font-weight: bold;
    font-size: 20px;
    letter-spacing: 1.5px;
    background-color: #DB7F8E;
    color: white;
    border-radius: 25px;
    border: none;
    cursor: pointer;
`
const Num = styled.span` 
    color: #604D53;
    font-weight: bold;
`
const Info = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px; 
`

const Right = styled.div`
    width: 40%;  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Img = styled.img`
    width: 60%;
    /* border-radius: 40px; */
    /* border-color: #604D53;     */
`

const First = () => {
  return (
    <Container>
      <Left>
        <Title>Welcome to the website</Title>
        <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sunt nulla ad corporis doloribus vero nemo voluptate similique totam nam.</Desc>
        <Info>
            <Button>Start Now</Button>
            <Num>Call at (999)-999-9999</Num>
        </Info>
      </Left> 
      <Right><Img src={Apple}></Img></Right>
    </Container>
  )
}

export default First
