import React from 'react'
import TvShowsPost from '../components/TvShows/TvShowsPost';
import NavBar from '../components/NavBar/NavBar';

import { LatestTvShows, PopularTvShows, TopratedTvShows} from "../urls"


function TvShows() {
  return (
    <div>
    <NavBar/>
    <TvShowsPost url={LatestTvShows} title='Latest' isSmall/>
    <TvShowsPost url={PopularTvShows} title='Popular' isSmall/>
    <TvShowsPost url={TopratedTvShows} title='Toprated' isSmall/>
    
            </div>
  )
}

export default TvShows