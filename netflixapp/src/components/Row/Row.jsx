import React from 'react'
import { useState, useEffect } from 'react'
import "./Row.scss"
import api from "../../utils/axiosConfig"

function Row({ fetchUrl, title, isLargeRow = false }) {

    const [movies, setMovies] = useState([])

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
    

    return (
    <div className='row'>
        <h2>{title}</h2>

        <div className="row-posters">
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