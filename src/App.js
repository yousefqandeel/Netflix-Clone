import Home from "./components/home/Home";
import FavList from "./components/favList/FavList";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="fav" element={<FavList />} />
            </Routes>
        </div>
    );
}

export default App;