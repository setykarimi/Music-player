import './sidebar.css';
import SidebarButton from './sidebarButton/sidebarButton';
import { MdSpaceDashboard, MdFavorite } from 'react-icons/md';
import { FaGripfire, FaPlay, FaSignOutAlt } from 'react-icons/fa';
import { IoLibrary } from 'react-icons/io5'

export default function Sidebar() {
    return (
        <div className='sidebar-container'>
            <img src='' className='profile-img' alt='profile' />
            <div>
                <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard/>}/>
                <SidebarButton title="Trending" to="/trending" icon={<FaGripfire/>}/>
                <SidebarButton title="Player" to="/player" icon={<FaPlay/>}/>
                <SidebarButton title="Favorites" to="/favorites" icon={<MdFavorite/>}/>
                <SidebarButton title="Library" to="/" icon={<IoLibrary/>}/>
            </div>
            <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt/>}/>
        </div>
    )
}