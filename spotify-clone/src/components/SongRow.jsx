import React from 'react'
import styled from 'styled-components'

function SongRow({track="test"}) {
  return (
    <SongRowContainer>
      <img src={track.album.images[0].url} alt=""/>
        <SongRowInfo>
            
            <h1>{track.name}</h1>
            <p>
                {track.artists.map((artist) => artist.name).join(", ")} -{" "}
                {track.album.name}
            </p> 
        </SongRowInfo>
    </SongRowContainer>
  )
}

export default SongRow

const SongRowContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    margin-left: 20px;
    color: white;

    > img{
        height: 40px;
        width: 40px;
    }

    &:hover {
        background-color: black;
        cursor: pointer;
        opacity: 0.8;
    }
`

const SongRowInfo = styled.div`
    margin-left: 20px;

    > h1 {
        font-size: 16px;
    }

    > p {
        font-size: 14px;
        margin-top: 3px;
        color: gray;
    }
` 