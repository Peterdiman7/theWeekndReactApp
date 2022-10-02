import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import HeroImage from '../components/HeroImage';
import Form from '../components/Form';

const Contact = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='CONTACT.' text='Contact for Booking' />
            <Form />
            <Footer />
        </div>
    );
}

export default Contact;