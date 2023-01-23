import { MoreHoriz, PlayCircleFilled } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import { useStateValue } from '../utils/StateProvider';
import Header from './Header'
import SongRow from './SongRow';

function Body({ spotify }) {

  const [{ discover_weekly }, dispatch] = useStateValue();

  return (
    <BodyContainer>
        <Header spotify={spotify}/>

        <BodyInfo>
            <img src={discover_weekly?.images[0].url}/>
            <BodyInfoText>
              <strong>PLAYLIST</strong>
              <h2>Favorite Songs</h2>
              <p>{discover_weekly?.description}</p>
            </BodyInfoText>
        </BodyInfo>

        <BodySongs>
          <BodyIcons>
            <PlayCircleFilleds/>
            <MoreHoriz/>
          </BodyIcons>
          <hr/>
          {discover_weekly?.tracks.items.map(item => (
            <SongRow track={item.track}/>
          ))}
        </BodySongs>
    </BodyContainer>
  )
}

export default Body

const BodyContainer = styled.div`
  flex: 0.9;
  height: 100vh;
  padding: 30px;
  overflow-y: overlay;
  color: white;
  background: linear-gradient(#21456d, rgba(0,0,0,1));
`

const BodyInfo = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 10px;

  > img {
    height: 15vw;
    margin-top: 20px;
    box-shadow: 0 4px 60px rgba(0,0,0,0.5);
  }
`
const BodyInfoText = styled.div`
  flex: 1;
  margin-left: 20px;

  > strong {

  }

  > h2 {
    font-size: 64px;
    margin-bottom: 10px;
  }

  > p {
    font-size: 14px;
    color: gray;
  }
`
const BodySongs = styled.div`
  margin: 20px 0;
`
const BodyIcons = styled.div`
  display: flex;
  align-items: center;

  > .MuiSvgIcon-root {
    margin-right: 20px;
  }
`
const PlayCircleFilleds = styled(PlayCircleFilled)`
  font-size: 70px !important;
  color: #0ecd0e;
  margin-top: 20px;
  margin-bottom: 20px;

  &:hover {
    transition: transform 0.2s ease-in-out;
    transform: scale(1.1) !important;
  }
`
const BodySongRow = styled.div`

`
const BodySongInfo = styled.div`

`