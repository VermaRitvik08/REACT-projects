import { HomeOutlined, LibraryMusicOutlined, SearchOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { useStateValue } from '../utils/StateProvider'
import SidebarOption from './SidebarOption'

function Sidebar() {

    const [{ playlists }, dispatch] = useStateValue()

  return (
    <SidebarContainer>
      <SidebarLogo
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
        <SidebarOption title="Home" Icon={HomeOutlineds} />
        <SidebarOption title="Search" Icon={SearchOutlineds} />
        <SidebarOption title="Your Library" Icon={LibraryMusicOutlineds} />
        
        <br/>
        <SidebarTitle>PLAYLISTS</SidebarTitle>
        <hr/>

        {playlists?.items?.map((playlist) => (
            <SidebarOption title={playlist.name} />
        ))}

        <SidebarOption title="Study Songs" />
        <SidebarOption title="Gym Songs" />
        <SidebarOption title="Party Songs" />
    </SidebarContainer>
  )
}

export default Sidebar

const SidebarContainer = styled.div`
    height: 100vh;
    min-width: 230px;
    flex: 0.1;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #040404;
    color: white;
    
    hr {
        border: 1px solid #282828;
        width: 90%;
        margin: 10px auto;
    }
`

const SidebarLogo = styled.img`
    margin-right: auto;
    padding: 10px;
    height: 80px;
`
const SidebarTitle = styled.strong`
    font-size: 16px;
    padding: 5px;
    margin-left: 10px;
`
const HomeOutlineds = styled(HomeOutlined)`
  margin-left: 10px;
  margin-right: 10px;  
`
const SearchOutlineds = styled(SearchOutlined)`
  margin-left: 10px;
  margin-right: 10px;
`
const LibraryMusicOutlineds = styled(LibraryMusicOutlined)`
  margin-left: 10px;
  margin-right: 10px;
`