import '../../assets/styles/NavBar.css'
import NavLink from './NavLink'
import gh from '../../assets/images/github.png'
import li from '../../assets/images/linkedin.png'
import {HashLink} from 'react-router-hash-link'

function Navigation() {
    
    return(
        <nav className='navbar'>
            <div className='top_left'>
                <NavLink isText={false} text='linkedin' link='http://github.com/sjverdejo' image={gh}/>
                <NavLink isText={false} text='github' link='http://linkedin.com' image={li}/>
            </div>
            <div className='top_right'>
                <NavLink isText={true} text='home' link='/'/>
                <NavLink isText={true} text='about me' link='about'/>
                <div className='dropdown'>
                    <NavLink isText={true} text='my projects' link='projects'/>
                    <div className='dropdownContent'>
                        <HashLink smooth={true} className='textLink' to='/projects#portfolio'>Portfolio</HashLink>
                        <HashLink smooth={true} className='textLink' to='/projects#taskme'>TaskME</HashLink>
                        <HashLink smooth={true} className='textLink' to='/projects#ems'>Employee Manager</HashLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation