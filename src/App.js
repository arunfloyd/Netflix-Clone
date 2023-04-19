import './App.css';
import React from 'react';

import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import TvShows from './Pages/TvShows';
function App() {
  return (
    <div className="App">
      <Router>
   <Routes>



   <Route exact path="/" element={Home}/>
   
     
     

     <Route  path="/movies"  element={Movies}/>
     

    <Route path="/tvshows"  element={TvShows}/>
   

   </Routes>


   </Router>
  
  
  
    </div>
  );
}

export default App;