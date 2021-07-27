import './LaunchDetail.css';
import default_img from './spacex_logo_square.png';
import {Link} from 'react-router-dom'
export const LaunchDetail = ({ launch }) => {

    return(
        <Link to={`/launches/${launch.flight_number}`}>
            <div className='launch-detail'>
                {launch.links.mission_patch_small === null? <img src={default_img}/>:
                 <img src={launch.links.mission_patch_small}/>
                 }
                 <div className="mission-info">
                    <p className="mission-name">{launch.mission_name}</p>

                    <p className="launch-date">{Date(launch.launch_date_local)}</p>
                </div>
                { launch.launch_success === true ? <p className='mission-status success'>Succcesful</p> 
                : launch.launch_success === false ? <p className="mission-status fail">Failure</p> : <p className=" mission-status upcoming">Upcoming</p>}
                 
                
            </div>
        </Link>
    );
}