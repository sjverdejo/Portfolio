import '../../assets/styles/Header.css'
import me from '../../assets/images/me.png'

function Header() {
    return (
        <div>
            <img className='headerImg' src={me} alt='pic of me' />
            <p>Hi, my name is Sam Verdejo! Welcome to my site!</p>
        </div>
    )
}

export default Header