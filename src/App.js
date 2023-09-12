import "./App.css";
import React from "react";
// import ListOfGifs from "./components/ListOfGifs";

import { Route, Routes, Link, useParams } from "react-router-dom";

// import { Switch } from "wouter";
const Home = () => <h1>Home</h1>;
const Tacos = () => {
  const { taco } = useParams();

  return (
    <div>
      <h1>Tacos</h1>
      {taco}
    </div>
  );
};
const tacos = ["carnitas", "barbacoa", "cochinita", "asada", "canasta"];
const Search = () => {
  return (
    <div>
      <h1>Search Page</h1>
      {tacos.map((taco) => {
        return (
          <li key={taco}>
            <Link to={`/tacos/${taco}`}>{taco}</Link>
          </li>
        );
      })}
    </div>
  );
};
const Image = () => {
  return (
    <div>
      <h2>Taco Asada</h2>
      <img
        src="https://media4.giphy.com/media/k75w5q3eo0PFi7XbIj/giphy.gif?cid=ecf05e47qh6ahl2ug9f7t2dqyv45pdpyknanyq0f1cgpfp0z&ep=v1_gifs_gifId&rid=giphy.gif&ct=g"
        alt="img of Gihpy"></img>
    </div>
  );
};

function App() {
  // const [keyword, setKeyword] = useState("red");
  return (
    <div className="App">
      {/* <section className="App-content">
        <h1>App</h1>
        <Link to="/gif/cats">Gifs de cats</Link>
        <Link to="/gif/screen">Gifs de screen</Link>
        <Link to="/gif/northland">Gifs de northland</Link>
        <Route path="/gif/:keyword" component={ListOfGifs}></Route>
      </section> */}
      <header>
        <h1>Test Page</h1>
        <nav>
          <ul>
            <li>
              <Link to="/search-page">Search page</Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/search-page" element={<Search />}></Route>
        {/* <Route path="/tacos" element={<Tacos />}></Route> */}
        <Route path="/tacos/:taco" element={<Tacos />}></Route>
        <Route path="/tacos/asada" element={<Image />}></Route>
      </Routes>
    </div>
  );
}

export default App;
