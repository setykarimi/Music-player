import { BrowserRouter, Routes } from "react-router-dom";
import Favorite from "./favorites";
import Feed from "./feed";
import Player from "./player";
import Trending from "./trending";

export default function Home() {
    return (
        <BrowserRouter>
            <Routes>
                <Routes path="/" element={<Home />} />
                <Routes path="/feed" element={<Feed />} />
                <Routes path="/trending" element={<Trending />} />
                <Routes path="/player" element={<Player />} />
                <Routes path="/favorites" element={<Favorite />} />
            </Routes>
        </BrowserRouter>
    )
}