import React from 'react'
import requests from '../../utils/Request'

import Banner from '../../components/Banner/Banner'
import Navbar from '../../components/Navbar/Navbar'
import "./HomeScreen.scss"
import Row from '../../components/Row/Row'

function HomeScreen() {
  return (
    <div>
      <Navbar />
      <Banner />

      <Row 
      title="Netflix Originals" 
      fetchUrl={requests.fetchNetflixOriginals} 
      isLargeRow />

      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  )
}

export default HomeScreen