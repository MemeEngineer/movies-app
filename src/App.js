import{useState, useEffect} from 'react'
import './App.css';
//components
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';

 function App() {

  // //.env.local callout
  // console.log(process.env.REACT_APP_MOVIE_API_KEY);

  //State to hold the movie data
  const [movie, setMovie]= useState(null);
  
  //function to getMovies
  const getMovie = async (searchTerm) => {
    //make fetch request and store response
    try{
    const response = await fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&t=${searchTerm}`)

    //parse JSON response into a javaScript object
    const data = await response.json()

    //set the movie state to the movie
    setMovie(data)
    }catch(e){
      console.error(e)
    }
  }
//This will run on the first render but not on subsquent renders
useEffect(() => {
  const movieArr= [ "a", "b", "c"]
  getMovie(`${movieArr[Math.floor(Math.random()*3)]}`)
},[setMovie])

  // USE OUR COMPONENTS IN APPs RETURNED JSX
  // We pass the getMovie function as a prop called moviesearch
  // We pass movie as props to movie display
  return (
    <div className="bg-red-200">
      <Form moviesearch={getMovie}/>
      <MovieDisplay movie={movie}/>
    </div>
  );
}

export default App;
