

export default function MovieDisplay({movie}){
const loaded = () => {
    return(
        <>
        <h2>{movie.Title}</h2>
        <h2>{movie.Genre}</h2>
        <img src={movie.Poster} alt={movie.Title}></img>
        <h2>{movie.Year}</h2>
        </>
    )
}

//function to return loading JSX

const loading = () => {
    return(
        <h1> No Movie to Display</h1>
    )
}
//ternary operator will determine which function JSX will return
return movie ? loaded(): loading()
}