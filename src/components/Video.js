import './VideoStyles.css';
import { Link } from 'react-router-dom';
import theWeeknd from '../assets/TheWeekndHomeScreen.mp4';

const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={theWeeknd} tupe='video/mp4' />
            </video>
            <div className="content">
            <h1>One and Only! The Weeknd. </h1>
            <p>All the music of the Weeknd in one place!</p>
            <div>
                <Link to='/training' className='btn'>Training</Link>
                <Link to='/contact' className='btn btn-light'>Launch</Link>
            </div>
            </div>
            </div>
    );
}

export default Video;