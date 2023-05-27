import '../assets/styles/Header.css'
import me from '../assets/images/me.png'

function Header({text, isMainHeader}) {
    if (isMainHeader) {
        return (
            <div className='headerDiv'>
                <img className='headerImg' src={me} alt='me'/>
                <p className='headerText'>{text}</p>
            </div>
        )
    } else {
        return (
            <div className='subheaderDiv'>
                <img className='subheaderImg' src={me} alt='me'/>
                <p className='subheaderText'>{text}</p>
            </div>
        )
    }
    
}

export default Header