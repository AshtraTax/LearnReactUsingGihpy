import Gif from "./Gif";
import getGifs from "../services/getGifs";
import "./Gif.css";
import { useState, useEffect } from "react";

export default function ListOfGifs({ params }) {
  const { keyword } = params;

  const [gifs, setGifs] = useState([]); //Hook (Estado)

  useEffect(() => {
    getGifs({ keyword }).then((gifs) => setGifs(gifs));
  }, [keyword]); // No olvidar poner la despendencia, en este caso se debe recargar al cambiar la 'keyword'
  return (
    <div className="content-gif">
      {gifs.map(({ title, id, url }) => (
        <Gif keyword={keyword} title={title} key={id} id={id} url={url}></Gif>
      ))}
    </div>
  );
}
