import { LoginEndpoint } from "../../spotify";
import  logo  from '../../assets/img/spotify.png';
import './login.css'

export default function Login(){
    return (
    <div className="login-page">
        <img src={logo} alt="spotify-logo" className="logo"/>
        <a  href={LoginEndpoint}> 
        <div className="login-btn">LOG IN</div>
        </a>
       
    </div>)

}