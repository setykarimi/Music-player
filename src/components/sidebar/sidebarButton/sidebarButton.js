import { IconContext } from 'react-icons';
import { NavLink } from 'react-router-dom';
import './sidebarButton.css';

export default function SidebarButton(props) {
    return (
        <NavLink to={props.to}>
            <IconContext.Provider value={{size: '20px', className: "btn-icon"}}>
            <div className='btn-body'>
                {props.icon}
                <p className='btn-title'>{props.title}</p>
            </div>
            </IconContext.Provider>
        </NavLink>
    )
}