import { useEffect, useState } from "react";
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

    return (
        <div className="library-body">
            {playlists.map((playlist) => {
                <div className="playlist-card">
                        <img src={playlist.images[0].url} className="playlist-image" alt="playlist-art"/>
                    <p>{playlist.name}</p>
                    <p>{playlist.tracks.total} Songs</p>
                </div>
            })}
        </div>
    )
} 