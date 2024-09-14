import React from "react";
import "./Sidebar.css";
import SidebarOptions from "./SidebarOptions";
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import LibraryMusicSharpIcon from '@mui/icons-material/LibraryMusicSharp';
import { useDataLayerValue } from "./DataLayer";

function Sidebar() {
  const [{playlists}, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img
        className="sidebar_logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOptions Icon = {HomeSharpIcon} title='Home' />
      <SidebarOptions Icon = {SearchSharpIcon} title='Search' />
      <SidebarOptions Icon={LibraryMusicSharpIcon} title='Your Library' />
      <br/>
      <strong className="sidebar_title">PLAYLISTS</strong>
      <hr/>

      {playlists?.items?.map(playlist => (
        <SidebarOptions title ={playlist.name}/>
      ))}
      
      <SidebarOptions title = "Hip Hop" />
      <SidebarOptions title = "Rock" />
      <SidebarOptions title = "RnB" />

    </div>
  );
}

export default Sidebar;
