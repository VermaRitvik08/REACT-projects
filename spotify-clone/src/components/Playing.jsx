import { Grid, Slider } from '@material-ui/core'
import { FavoriteOutlined, PlayCircleFilled, PlaylistPlayOutlined, Repeat, Shuffle, SkipNext, SkipPrevious, SpeakerOutlined, VolumeDownOutlined } from '@material-ui/icons'
import React from 'react'
import styled,{css} from 'styled-components'


function Playing() {
  return (
    <PlayingContainer>
      <PlayingLeft>
        <SongCover src="https://media.pitchfork.com/photos/59429f7dece6a834561b3356/1:1/w_600/Youngthug_easybreezybeautifulthuggergirls.png" alt=""/>
        <SongInfo>
          <h4>You Said (feat. Quavo)</h4>
          <p>Young Thug</p>
        </SongInfo>
        {/* <FavoriteOutlined/> */}
      </PlayingLeft>

      <PlayingMid>
        <Shuffles/>
        <SkipPreviouss/>
        <PlayCircleFilleds/>
        <SkipNexts/>
        <Repeats/>
      </PlayingMid>

      <PlayingRight>
        <Grid container spacing={2}>
            <Grid item>
              <PlaylistPlayOutlined/>
            </Grid>
            <Grid item>
              <SpeakerOutlined/>
            </Grid>
            <Grid item>
              <VolumeDownOutlined/>
            </Grid>
            <Grid item xs>
              <Slider aria-label="default" />
            </Grid>
          </Grid>
      </PlayingRight>
    </PlayingContainer>
  )
}

export default Playing

const PlayingContainer = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    bottom: 0;
    height: 85px;
    padding: 20px;
    width: 100%;
    background-color: #282828;
`
const PlayingRight = styled.div`
  flex: 0.3;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > * .MuiSlider-root {
    color: white;
  }

  > * .MuiSlider-thumb {
  display: none;
}
`
const PlayingMid = styled.div`
  flex: 0.4;
  padding: 0 100px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 400px;
`
const PlayingLeft = styled.div`
  flex: 0.3;
  display: flex;
  color: white;
  align-items: center;
  width: 300px;
`

const SongInfo = styled.div`
  > h4 {
    margin-bottom: 5px;
    font-size: 14px;
  }

  > p {
    font-size: 12px;
  }
`
const SongCover = styled.img`
  height: 60px;
  width: 60px;
  object-fit: contain;
  margin-right: 20px;
`

const FooterIcon = css`
  &:hover {
    transition: transform 0.2s ease-in-out;
    transform: scale(1.2) !important;
  }
`

const Shuffles = styled(Shuffle)`
  ${FooterIcon}
`
const SkipPreviouss = styled(SkipPrevious)`
  ${FooterIcon}
`
const PlayCircleFilleds = styled(PlayCircleFilled)`
  ${FooterIcon}
`
const SkipNexts = styled(SkipNext)`
  ${FooterIcon}
`
const Repeats = styled(Repeat)`
  ${FooterIcon}
`
