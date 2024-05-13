
function Chip({movieID, movies, selectedMovies, setSelectedMovies}){
    const movie = movies.find((item) => item.id === movieID);

    function removeMovie(){
        setSelectedMovies(selectedMovies.filter((id) => id !== movieID));
    }

    return(
        <div style={{
            border: "2px solid black",
            padding: "10px",
            margin: "10px",
            width: "200px",
        }}>
            {movie.name} &nbsp; &nbsp; &nbsp; 
            <span onClick={removeMovie}>X</span> 
        </div>
    );
}

export default Chip;