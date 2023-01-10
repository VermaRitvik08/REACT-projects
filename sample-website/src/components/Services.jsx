import React from 'react'
import styled from 'styled-components'
import Garden from './garden.png'

const Container = styled.div`
    height: 100%;
    display: flex;
    padding: 10px;
`
const Left = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Right = styled.div`
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
    margin-top: 40px;
    padding: 15px;
    font-weight: bold;
    font-size: 20px;
    letter-spacing: 1.5px;
    background-color: #377771;
    color: white;
    border-radius: 25px;
    border: none;
    cursor: pointer;
`
    
const Img = styled.img`
    width: 90%;
    margin: 10px;
    margin-left: 50px;
`

const Services = () => {
  return (
    <Container>
        <Left><Img src={Garden}></Img></Left>
        <Right>
            <Title>Services</Title>
            <Desc>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis iure nesciunt non neque. Obcaecati suscipit fuga libero laudantium labore dignissimos quibusdam animi sint eius nostrum inventore quasi officiis excepturi quis aliquam sed atque sit ex commodi, quam earum! At, cumque?
            </Desc>
            <Button>Learn More</Button>
        </Right>
    </Container>
  )
}

export default Services
