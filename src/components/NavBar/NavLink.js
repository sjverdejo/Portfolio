import '../../assets/styles/NavLink.css'

function NavLink({image, text, link, isText}) {
    //if isText prop is true return text link, otherwise, return image link
    if (isText) {
        return (
            //change this to buttons later to keep as SPA
            <a className='textLink' href={link}>{text}</a>
            )
    } else {
        return (
            <a target='_blank' href={link} rel="noreferrer"><img className='imgLink' src={image} alt={text}/></a>
        )
    }
}

export default NavLink