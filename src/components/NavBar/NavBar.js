import '../../assets/styles/NavBar.css'
import NavLink from './NavLink'
import gh from '../../assets/images/github.png'
import li from '../../assets/images/linkedin.png'

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
                    {/* Figure out link ot specific part of page */}
                        <NavLink isText={true} text='project1' link='' />
                        <NavLink isText={true} text='project2' link='' />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation