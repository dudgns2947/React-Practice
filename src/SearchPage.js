import React from "react";
import { Button, TextField } from "@mui/material";
import MusicList from "./MusicList.js";

export default function SearchPage() {
  const [searchWord, setSearchWord] = React.useState("");
  const [music_list, setMusicList] = React.useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchWord);
    fetch(`http://itunes.apple.com/search?term=${searchWord}&entity = album`)
      .then((r) => r.json())
      .then((r) => {
        console.log(r);
        setMusicList(r.results);
        setSearchWord("");
      })
      .catch((e) => console.log("error when search musician"));
  };

  const handleSearchTextChange = (e) => {
    setSearchWord(e.target.value);
  };

  return (
    <React.Fragment>
      <form style={{ display: "flex", marginTop: 20, marginBottom: 15 }}>
        <div style={{ display: "flex", marginLeft: "auto" }}></div>
      </form>

      <MusicList list={music_list}></MusicList>
    </React.Fragment>
  );
}
