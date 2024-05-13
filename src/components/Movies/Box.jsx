
function Box({data, selectedMovies, setSelectedMovies}){

    function handleSelection(){
        if(selectedMovies.includes(data.id)){
            setSelectedMovies(selectedMovies.filter((id) => id !== data.id));
        }else{
            setSelectedMovies([...selectedMovies, data.id]);
        }
    }

    return(
        <div
            style={{
                border: selectedMovies.includes(data.id) ? "5px solid green" : "5px solid black",
                padding: "10px",
                margin: "10px",
                width: "200px",
                height: "200px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: selectedMovies.includes(data.id) ? "lightgreen" : "white"
            }}
            onClick={handleSelection}
        >
            {data.name}
        </div>
    );
}

export default Box;