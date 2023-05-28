import { useRouteError } from "react-router-dom"
import '../assets/styles/Error.css'
import NavLink from '../components/NavBar/NavLink'

function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className='error'>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <NavLink isText={true} text='Go Home' link='/'/>
        </div>
    )
}

export default ErrorPage