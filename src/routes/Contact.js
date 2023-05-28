import Header from '../components/Header'
import '../assets/styles/Container.css'
import '../assets/styles/Contact.css'

function Contact() {
    return (
        <div>
            <Header size={200} text='get in touch'/>
            <div className='Container'>
                <div className='form'>
                    <form>
                        <label>Name: </label>
                        <input />
                        <label>Email: </label>
                        <input />
                        <label>Phone Number: </label>
                        <input />
                        <label>Message: </label>
                        <input />
                    </form>
                </div>
                <h2>Let's work together!</h2>
            </div>
        </div>
    )
}

export default Contact