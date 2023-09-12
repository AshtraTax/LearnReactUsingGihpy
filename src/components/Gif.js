import { Switch, Link, Route } from "wouter";
import "./Gif.css";
// import ViewGif from "./ViewGif";

export default function Gif({ keyword, title, id, url }) {
  return (
    <div>
      <Link className="Gif" key={id} to={`/gif/${keyword}/${url}`}>
        <h4>{title}</h4>
        <small>{id}</small>
        <img src={url} alt={title} />
        {/* <Link to={`/gif/${keyword}/${url}`}>{title}</Link> */}
      </Link>
      {/* <Switch>
        <Route path="/gif/:keyword" component={ListOfGifs}></Route>
        <Route path="/gif/:keyword/:url" component={ListOfGifs}></Route>
      </Switch> */}
    </div>
  );
}
