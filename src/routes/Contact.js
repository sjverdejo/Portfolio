import '../assets/styles/Container.css'
import '../assets/styles/Contact.css'
import Header from '../components/Header'
import Form from '../components/Form'

function Contact() {
    return (
        <div className='page_Container'>
            <Header size={200} text='get in touch'/>
            <div className='Container'>
                <Form />
                <h2>Let's work together!</h2>
            </div>
        </div>
    )
}

export default Contact