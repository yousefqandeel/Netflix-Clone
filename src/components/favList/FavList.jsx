import Header from "../navbar/Navbar.jsx";
import { useState, useEffect } from "react";
import FavMovie from "../favList/FavMovie/FavMovie.jsx"
import Footer from "../Footer/Footer.jsx";
export default function FavList() {
    const [favMovie, setFavMovie] = useState([]);
    async function getFavMovie() {
        const response = await fetch(`${process.env.REACT_APP_SERVER}/getMovies`);
        const data = await response.json();

        setFavMovie(data);
    }

    useEffect(() => {
        getFavMovie();
    }, []);

    return (
        <>
            <Header />
            <div>
                {favMovie && favMovie.map((data) => {
                    return (
                        <FavMovie key={data.id} movie={data} getFavMovie={getFavMovie} />
                    )
                })}
            </div>
            <Footer />
        </>
    )

}