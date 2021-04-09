import React, {map} from "react";
import "./SideBar.css";
import logo from "../../logo-white.png";
import SidebarOption from "../sidebarOption/SidebarOption";
import HomeIcon from "@material-ui/icons/HomeOutlined";
import SearchIcon from "@material-ui/icons/SearchSharp";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusicOutlined";
import { useDataLayerValue } from "../../DataLayer";

function SideBar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img src={logo} alt="Spotify Logo" className="logo" />
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
      <br />
      <strong className="sidebar_title"> PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
          <SidebarOption title={playlist.name}/>
      ))}
    </div>
  );
}

export default SideBar;
