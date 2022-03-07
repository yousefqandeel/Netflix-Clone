import Movie from "../movie/Movie";
import { useState, useEffect } from "react";

let MovieList = (props) => {
    const [chosenMovie, setChosenMovie] = useState()

    function handelChosenMovie(movie) {

    };
    return (
        <div>
            {
                props.movies.map(movie => {
                    return (<Movie movie={movie} />
                    )
                })

            }

        </div>
    )
}
export default MovieList;