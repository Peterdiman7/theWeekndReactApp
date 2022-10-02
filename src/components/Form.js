import './FormStyles.css'

const Form = () => {
    return (
        <div className="form">
            <form>
                <label>Your Name</label>
                <input type='text' placeholder='Peter Anastasov...'></input>
                <label>Email</label>
                <input type='email' placeholder='peter@email.com'></input>
                <label>Phone Number</label>
                <input type='text' placeholder='1-800-123-1234'></input>
                <textarea rows='6' placeholder='Type a short message here...' />
                <button className="btn">Submit</button>
            </form>
        </div>
    );
}

export default Form;