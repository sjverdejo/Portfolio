import '../assets/styles/Header.css'
import me from '../assets/images/me.png'
import NavLink from './NavBar/NavLink'

function Header({text, isMainHeader, size}) {
    if (isMainHeader) {
        return (
            <div className='headerDiv'>
                <img className='headerImg' src={me} alt='me' width={size}/>
                <div className='text'>
                    <p className='headerText'>{text}</p>
                    <NavLink isText={true} text='click here to contact me.' link='/contact'/>
                </div>
            </div>
        )
    } else {
        return (
            <div className='subheaderDiv'>
                <img className='headerImg' src={me} alt='me' width={size}/>
                <p className='subheaderText'>{text}</p>
            </div>
        )
    }
    
}

export default Header