import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CollectionPoint from "../pages/CollectionPoint";
import HowToDonate from "../pages/HowToDonate";



export default function AppRoute(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/about" element={<About/>} />
                <Route exact path="/collectionpoint" element={<CollectionPoint/>} />
                <Route exact path="/howtodonate" element={<HowToDonate/>} />
            </Routes>
        </BrowserRouter>
    )

}