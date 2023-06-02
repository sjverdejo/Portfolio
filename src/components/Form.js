import '../assets/styles/Form.css'

function Form() {
    return (
        <div className='form'>
            <form>  
                <label className='lbl'>Name: </label>
                <input type='text' className='info' />
                <label className='lbl'>Email: </label>
                <input type='email' className='info' />
                <label className='lbl'>Message: </label>
                <textarea className='info' rows='4'/>
                <br />
                <input type='submit' value='Send me a message!' className='submit'/>
            </form>
        </div>
    )
}

export default Form