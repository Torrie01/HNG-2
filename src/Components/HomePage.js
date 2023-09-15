import Hero from './Hero'
import Navbar from './Navbar'
import Footer from './Footer';
import fetchData from './fetchData';
import { useState } from 'react';
import MoviesCard from './MoviesCard'



const HomePage = () => {    
    const {data:movieLists, error, loading} = fetchData('https://api.themoviedb.org/3/discover/movie?api_key=850136383d9112b1fa4ef05d1d27c587')
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(!isClicked);
    }
  return (
    <div className='content'>
        <div className='hero-section'>
            <Navbar />
            <Hero />
        </div>
        <div className='movie-list'>
            <div className='movies-grid'>
                <h2>Featured Movie</h2>
                <a href='/'>See more </a>
            </div>
                {loading && <h2>Loading...</h2>}
                <h2>{error}</h2>
            <div className='moviesGrid-content'>

                <MoviesCard movieLists={movieLists} isClicked={isClicked} handleClick={handleClick}/>
            </div>
        </div>
        <Footer />
        
    </div>
  )
}

export default HomePage;