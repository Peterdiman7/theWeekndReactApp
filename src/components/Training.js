import './TrainingStyles.css';

import { Link } from 'react-router-dom';

import theWeeknd1 from '../assets/theWeeknd1.jpeg';
import theWeeknd2 from '../assets/theWeeknd2.jpeg';

const Training = () => {
    return (
        <div className='Training'>
            <div className="left">
                <h1>Training</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, accusamus!</p>
                <Link to='/contact'><button className='btn'>Contact</button></Link>
            </div>
        <div className="right">
            <div className="img-container">
                <div className="image-stack top">
                    <img src={theWeeknd1} className="img1" alt='' />
                </div>
                <div className="image-stack bottom">
                    <img src={theWeeknd2} className="img2" alt='' />
                </div>
            </div>
        </div>
    </div>
    );
}

export default Training;