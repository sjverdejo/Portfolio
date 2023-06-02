import '../assets/styles/Form.css'

function Form() {
    return (
        <div className='form'>
            <form>  
                <label>Name: </label>
                <input />
                <label>Email: </label>
                <input />
                <label>Message: </label>
                <input />
                <input type='submit' />
            </form>
        </div>
    )
}

export default Form