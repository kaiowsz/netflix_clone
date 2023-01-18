import React, { useEffect, useState } from 'react'
import "./Banner.scss"

import api from '../../utils/axiosConfig'
import requests from '../../utils/Request'

import AddIcon from "@mui/icons-material/Add"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';


function Banner() {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    async function fetchData() {
        const request = await api.get(requests.fetchNetflixOriginals)
        const data = request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]

        setMovie(data)
        console.log(data)
    }
    fetchData()
  }, [])

  function truncateDescription(string, n) {
      return string?.length > n ? string.substring(0, n) + "..." : string
  }

  return (
    <header className='banner' style={{ 
      backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
      backgroundSize: "cover"
     }}>

      <div className="banner-content">
        <h1 className="banner-title">
          {movie?.name || movie?.original_name}
        </h1>
        <div className="banner-buttons">
          <button className='banner-button button-play'><PlayArrowIcon/> Play</button>
          <button className='banner-button button-add'><AddIcon/> My List</button>
        </div>
        <h1 className="banner-description">
          {truncateDescription(movie?.overview, 150)} </h1>
      </div>

      <div className='banner-fadeBottom' />

    </header>
  )
}

export default Banner