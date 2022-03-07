import NavBar from "../navBar/Navbar"
import React, { useState, useEffect } from "react";
import MovieList from "../movieList/MovieList";


const Home = () => {
    const [moviesList, setMoviesList] = useState([]);
    const fetchData = async () => {

        const response = await fetch(`${process.env.REACT_APP_SERVER}/trending`);
        const data = await response.json();
        setMoviesList(data);
        console.log(data);
    };
    useEffect(() => fetchData(), []);
    return (
        <>
            <NavBar />
            <MovieList movies={moviesList}></MovieList>
        </>
    );
};

export default Home;