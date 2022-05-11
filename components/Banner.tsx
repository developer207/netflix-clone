import React, { useEffect, useState } from 'react'
import { Movie } from '../interfaces'
import Image from 'next/Image'
import styles from '../styles/Banner.module.css'
import { FaPlay } from 'react-icons/fa'
import { IoMdInformationCircleOutline } from 'react-icons/io'

import Model from './Model'

interface props{
    trendingMovies:Movie[]
}

const Banner = ({ trendingMovies }: props) => {
  const [movie, setMovie] = useState<Movie | null>();
  const [show, setShow] = useState(false);
    useEffect(() => {
        setMovie(trendingMovies[Math.floor(Math.random() * trendingMovies.length)])
    },[])
  
  const handleClose = () => {
    setShow(false)
  }

  return (
    <div className='flex flex-col md:space-y-6 pt-24  lg:h-[65vh] lg:justify-end lg:pb-5 '>
      <div className='absolute   w-screen -z-10 h-[100vh] top-0 left-0'>
        {movie && <Image src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              layout='fill'
              objectFit='cover'
          />}
      </div>
          
          <h1 className='text-2xl lg:text-7xl md:text-4xl'>{movie?.title || movie?.name || movie?.original_name}</h1>
      <p className='max-w-xs text-sm md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl'>{movie?.overview}</p>
      
      <div className='flex w-56 justify-between md:w-72 lg:w-96'>
        <button  className={`${styles.buttons} bg-white text-black`}><FaPlay className='text-gray-900 text-lg md:text-xl lg:text-3xl '/> Play</button>
        <button onClick={()=>setShow(true)} className={`${styles.buttons} bg-gray-400`}><IoMdInformationCircleOutline className='text-white text-lg md:text-xl lg:text-4xl '/> More Info</button>
      </div>

      <Model show={show} handleClose={ handleClose}/>

      
    </div>
  )
}

export default Banner
