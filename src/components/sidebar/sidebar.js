import './sidebar.css';
import SidebarButton from './sidebarButton/sidebarButton';
import { MdSpaceDashboard, MdFavorite } from 'react-icons/md';
import { FaGripfire, FaPlay, FaSignOutAlt } from 'react-icons/fa';
import { IoLibrary } from 'react-icons/io5'
import { useEffect, useState } from 'react';
import apiClient from '../../spotify';

export default function Sidebar() {
    const [image, setImage] = useState("https://i1.wp.com/hypebeast.com/image/2020/07/apple-memoji-update-headwear-masks-hairstyles-7.png?w=1600");

    const [name,setName] = useState("")

    useEffect(() => {
        apiClient.get("me")
            .then(res => {
                setImage(res.data.images[0].url)
            setName(res.data.display_name)})
            .catch(err => console.log(err))
    }, [])
    return (
        <div className='sidebar-container'>
            <div className='image-container'>
            <img src={image} className='profile-img' alt='profile' />
            <span>{name}</span>
            </div>
            <div>
                <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
                <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} />
                <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
                <SidebarButton title="Favorites" to="/favorites" icon={<MdFavorite />} />
                <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
            </div>
            <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />} />
        </div>
    )
}