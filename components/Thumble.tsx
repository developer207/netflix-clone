import React, { useEffect, useState } from 'react'
import Image from 'next/Image'
import { Movie } from '../interfaces'

import Model from './Model'

interface props {
    movie: Movie
  
}

const Thumble = ({ movie }: props) => {
    const [show, setShow] = useState(false)
    const handleClose = () => {
        setShow(false)
    }

    useEffect(() => {
        async () => {
            const res = fetch(`http://api.themoviedb.org/3/movie/157336?api_key=512527e45f78c9fe542face1e16e9ad9&append_to_response=videos`)
            const singleMovie = (await res).json
            console.log(singleMovie)
        }
    },[movie])
    return (
        <div className='relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105'>


            <Image src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
                layout='fill'
                className='object-cover rounded-sm'
                onClick={() => {
                    setShow(true)
                    console.log("ashok")
                   
                }}
             />
              
            <Model show={show} handleClose={handleClose}/>
      
    </div>
    )
}

export default Thumble


