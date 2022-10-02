import theWeeknd from '../assets/TheWeekndHomeScreen.mp4';

const Main = () => {
    return (
        <div className='main'>
            <div className='overlay'></div>
            <video src={theWeeknd} autoPlay loop muted/>
            <div className="content">
                <h1>Welcome</h1>
                <p>To my site</p>
            </div>
        </div>
    );
}

export default Main;