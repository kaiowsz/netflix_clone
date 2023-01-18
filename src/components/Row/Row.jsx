import React from 'react'
import { useState, useEffect } from 'react'
import "./Row.scss"
import api from "../../utils/axiosConfig"

function Row({ fetchUrl, title, isLargeRow = false }) {

    const [movies, setMovies] = useState([])
    const [scrollX, setScrollX] = useState(-400)

    const base_url = "https://image.tmdb.org/t/p/original"

    useEffect(() => {
      async function fetchData() {
        const request = await api.get(fetchUrl)
        setMovies(request.data.results)
        console.log(request.data.results)
        return request;
      }
      fetchData()
    }, [fetchUrl])

    function handleClickLeft() {
      let x = scrollX + Math.round(window.innerWidth / 2);
      if(x > 0) {
        x = 0
      }
      setScrollX(x)
    }


    function handleClickRight() {
      let x = scrollX - Math.round(window.innerWidth / 2)
      let listWidth = movies.length * (isLargeRow ? 175 : 280)
      if ((window.innerWidth - listWidth) > x ) {
        x = window.innerWidth - listWidth - 60
      }
      setScrollX(x)
    }

    

    return (
    <div className='row'>
        <h2>{title}</h2>

        

        <div className="row-posters" style={{
          marginLeft: scrollX,
          transition: "ease .5s",
          width:  isLargeRow ? movies.length * 175 : movies.length * 280 
        }}>


        <div className={`row-arrowLeft ${isLargeRow && "row-arrowLeftLarge"}`} style={{ fontSize: 40 }} onClick={handleClickLeft}>
          &lt;
        </div>
        <div className={`row-arrowRight ${isLargeRow && "row-arrowRightLarge"}`} style={{ fontSize: 40 }} onClick={handleClickRight}>
          &gt;
        </div>

        {movies?.map(movie => 

            ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                <img 
                className={`row-poster ${isLargeRow && "row-posterLarge"}`}
                key={movie.id}
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
            )

        )}
        </div>
    </div>
    )
}

export default Row