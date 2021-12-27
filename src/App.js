import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import {action ,originals,drama,Horror} from './urls'
import NavBar from './Components/NavBar';
import Rowpost from './Components/Rowpost/Rowpost';


function App() {
  return (
    <div className='App'>
      <NavBar />
      <Banner />
      <Rowpost url={originals} title='Netflix Orginals' />
      <Rowpost url={action}  title='Action' isSmall />
      <Rowpost url={drama}  title='Comedy Movies' isSmall />
      <Rowpost url={Horror}  title='HorrorMovies' isSmall />
 
    </div>


  )
}

export default App;
