import { useState } from "react";
import { Box, Chip } from "../components";

const moviesData = [
    {
        id: 1,
        name: "Action",
        img: "",
    },
    {
        id: 2,
        name: "Drama",
        img: "",
    },
    {
        id: 3,
        name: "Romance",
        img: "",
    },
    {
        id: 4,
        name: "Thriller",
        img: "",
    },
    {
        id: 5,
        name: "Western",
        img: "",
    },
    {
        id: 6,
        name: "Horror",
        img: "",
    },
    {
        id: 7,
        name: "Fantasy",
        img: "",
    },
    {
        id: 8,
        name: "Music",
        img: "",
    },
    {
        id: 9,
        name: "Fiction",
        img: "",
    }
]

function Movies(){

    const [selectedMovies, setSelectedMovies] = useState([]);

    return (
        <>
            <p>Movies Page</p>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)"
            }}>
                {moviesData.map((data) => {
                    return <Box key={data.id} data={data} selectedMovies={selectedMovies} setSelectedMovies={setSelectedMovies}/>;
                })}
            </div>
            <div>
                {selectedMovies.map((movieID) => {
                    return <Chip key={movieID} movieID={movieID} movies={moviesData} 
                    selectedMovies={selectedMovies} setSelectedMovies={setSelectedMovies}/>;
                })}
            </div>
        </>
    );
}

export default Movies;