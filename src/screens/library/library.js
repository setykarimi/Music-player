import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai"
import { useNavigate } from "react-router-dom";
import apiClient from "../../spotify";
import './library.css';

export default function Library() {
    const [playlists, setPlaylists] = useState([]);
    useEffect(() => {
        apiClient.get("me/playlists")
            .then((res) => {
                setPlaylists(res.data.items)
                console.log(res.data.items)
            })
            .catch(err => console.log(err))
    }, [])

    const navigate = useNavigate();

    const playPlaylist = (id) => {
        navigate('/player' , {state: { id: id}})
    }

    return (
        <div className="library-body">
            {playlists.map((playlist) => {
                <div className="playlist-card" key={playlist.id} onClick={() => playPlaylist(playlist)}>
                        <img src={playlist.images[0].url} className="playlist-image" alt="playlist-art"/>
                    <p className="playlist-title">{playlist.name}</p>
                    <p className="playlist-subtitle">{playlist.tracks.total} Songs</p>
                    <div className="playlist-fade">
                        <IconContext.Provider value={{size: "50px", color: "#e99D72"}}>
                            <AiFillPlayCircle />
                        </IconContext.Provider>
                    </div>
                </div>
            })}
        </div>
    )
} 