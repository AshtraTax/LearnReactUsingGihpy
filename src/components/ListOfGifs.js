import Gif from "./Gif";
import getGifs from "../getGifs";
import "./Gif.css";
import { useState, useEffect } from "react";

export default function ListOfGifs({ keyword }) {
  const [gifs, setGifs] = useState([]); //Hook (Estado)

  useEffect(() => {
    getGifs({ keyword }).then((gifs) => setGifs(gifs));
  }, []);
  return gifs.map(({ title, id, url }) => (
    <Gif title={title} id={id} url={url}></Gif>
  ));
}
