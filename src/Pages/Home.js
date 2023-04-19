import React from 'react'
import {action,orginals,comedy,romance,documentaries,horror} from '../urls'
import RowPost from '../components/RowPost/RowPost';
import Banner from '../components/Banner/Banner'
import NavBar from '../components/NavBar/NavBar';
function Home() {
  return (
  
    <div>
        <NavBar/>
        <Banner/>
    <RowPost url={orginals} title='Netflix Orginals'  />
    <RowPost url={action} title='Action' isSmall/>
    <RowPost url={comedy} title='Comedy' isSmall/>
    <RowPost url={romance} title='Romance' isSmall/>
    <RowPost url={horror} title='Horror' isSmall/>
    <RowPost url={documentaries} title='Documentaries' isSmall/></div>
  )
}

export default Home