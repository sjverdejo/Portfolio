import '../assets/styles/Header.css'
import me from '../assets/images/me.png'

function Header() {
    return (
        <div className='headerDiv'>
            <img className='headerImg' src={me} alt='pic of me' />
            <p>Hi, my name is Samuel Verdejo.</p>
        </div>
    )
}

export default Header