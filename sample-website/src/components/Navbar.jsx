import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 50px;
    /* background-color: #FFDBDA; */
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Left = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Logo = styled.h1`
    font-weight: bold;
    font-size: 50px;
    padding: 15px;
    color: #604D53;
`
const List = styled.ul`
    display: flex;
    list-style: none;
`
const ListItem = styled.li`
    margin-right: 20px;
    font-size: 20px;
    font-weight: bold;
    color: #604D53;
    `
const Button = styled.button`
    padding: 15px;
    font-weight: bold;
    font-size: 15px;
    background-color: #604D53;
    color: white;
    border-radius: 10px;
    border: none;
    cursor: pointer;
`

const Navbar = () => {
  return (
    <div>
        <Container>
            <Wrapper>
            <Left><Logo>Site Title</Logo>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Categories</ListItem>
                    <ListItem>Contact</ListItem>
                    <ListItem>About</ListItem>
                </List>
            </Left>
            <Button>Login</Button>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Navbar
