
import Head from 'next/head'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Row from '../components/Row'
import { Movie } from '../interfaces'

interface props {
  trendingMovies: Movie[]
}

const Home = ({ trendingMovies }: props) => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010512] lg:h-[155vh]">
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className='relative pl-5 lg:pl-8 space-y-32'>
        <Banner trendingMovies={trendingMovies} />
        
        <section className='space-y-5 lg:space-y-10'>
          <Row title={"Trending Movies"} movie={trendingMovies}/>
          <Row title={"Trending Movies"} movie={trendingMovies}/>
          <Row title={"Trending Movies"} movie={trendingMovies}/>
          <Row title={"Trending Movies"} movie={trendingMovies}/>
          <Row title={"Trending Movies"} movie={trendingMovies}/>
          <Row title={"Trending Movies"} movie={trendingMovies}/>
          <Row title={"Trending Movies"} movie={trendingMovies}/>
          <Row title={"Trending Movies"} movie={trendingMovies}/>
          <Row title={"Trending Movies"} movie={trendingMovies}/>
          <Row title={"Trending Movies"} movie={trendingMovies}/>
        </section>
      </main>
      
      
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const res = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=512527e45f78c9fe542face1e16e9ad9')
  const data = await res.json();

  return {
    props: {
      trendingMovies: data.results,
    }
  }
}



