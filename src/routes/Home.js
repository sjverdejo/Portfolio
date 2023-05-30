import Header from '../components/Header'
import '../assets/styles/Container.css'

function Home() {
    return (
        <div className='page_Container'>
            <Header text="Hi, my name is Sam Verdejo. I am a " colorText='Software Developer' isMainHeader={true} size={300}/>
        </div>
    )
}

export default Home