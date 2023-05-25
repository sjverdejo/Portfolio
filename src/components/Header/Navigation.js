import '../../assets/styles/Navigation.css'
import NavLink from './NavLink'
import gh from '../../assets/images/github.png'
import li from '../../assets/images/linkedin.png'

function Navigation() {
    return(
        <div className='navbar'>
            <div className='top_left'>
                <NavLink isText={false} text='linkedin' link='http://github.com/sjverdejo' image={gh}/>
                <NavLink isText={false} text='github' link='http://linkedin.com' image={li}/>
            </div>
            <div className='top_right'>
                <NavLink isText={true} text='home' link=''/>
                <NavLink isText={true} text='about me' link=''/>
                <NavLink isText={true} text='my projects' link=''/>
            </div>
        </div>
    )
}

export default Navigation