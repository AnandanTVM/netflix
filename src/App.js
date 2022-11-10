import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {trending,Originals,ActionMovies,ComedyMovies,HorrorMovies,RomanceMovies,Documentaries,Action} from './url'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner url={trending}/>
      <RowPost url={Originals} title='Netflix Originals' />
      <RowPost url={ActionMovies} title='Action' issmall />
      <RowPost url={HorrorMovies} title='Horror Movies' issmall />
      <RowPost url={RomanceMovies} title='Romance Movies' issmall />
      <RowPost url={Documentaries} title='Documentaries' issmall />
      <RowPost url={ComedyMovies} title='Comedy Movies' issmall />
      <RowPost url={Action} title='Action Movies' issmall />
      

    </div>
  );
}

export default App;
