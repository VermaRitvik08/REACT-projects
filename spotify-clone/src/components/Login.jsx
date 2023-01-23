import React from 'react'
import styled from 'styled-components'
import { loginURL } from './spotify'

function Login() {
  return (
    <LoginContainer>
        <Logo src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""/>
        <LoginButton href={loginURL}>LOGIN WITH SPOTIFY</LoginButton>
    </LoginContainer>
  )
}

export default Login

const LoginContainer = styled.div`
    display: grid;
    place-items: center;
    background-color: black;
    height: 100vh;
`
const Logo = styled.img`
    width: 100%;
`

const LoginButton = styled.a`
    padding: 20px;
    color: white;
    background-color: #1db954;
    border-radius: 100px;
    font-weight: 800;
    text-decoration: none;
`