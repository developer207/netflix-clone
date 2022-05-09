import React from 'react'
import Image from 'next/Image'
import { Movie } from '../interfaces'

interface props {
    movie: Movie
}

const Thumble = ({ movie }: props) => {
    return (
        <div className='relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105'>


            <Image src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
                layout='fill'
                className='object-cover rounded-sm'
             />
              
         
      
    </div>
    )
}

export default Thumble
