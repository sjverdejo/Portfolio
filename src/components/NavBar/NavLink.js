import '../../assets/styles/NavLink.css'
import { Link } from 'react-router-dom'

function NavLink({image, text, link, isText}) {
    //if isText prop is true return text link, otherwise, return image link
    if (isText) {
        return (
            <Link to={link} className='textLink'>{text}</Link>
            )
    } else {
        return (
            <a target='_blank' href={link} rel="noreferrer"><img className='imgLink' src={image} alt={text}/></a>
        )
    }
}

export default NavLink