import React from 'react'
import styled from 'styled-components'
import Body from './Body'
import Playing from './Playing'
import Sidebar from './Sidebar'

function WebPlayer({spotify}) {
  return (
    <PlayerContainer>
        <PlayerBody>
            <Sidebar/>
            <Body/>
        </PlayerBody>

        <Playing/>
    </PlayerContainer>
  )
}

export default WebPlayer

const PlayerContainer = styled.div`

`

const PlayerBody = styled.div`
    display: flex;
`