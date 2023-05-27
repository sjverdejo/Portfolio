import '../assets/styles/About.css'
import Header from '../components/Header'
import AboutContent from '../components/AboutContent'

function About() {
    return (
        <div>
            <Header text={'about me'} isMainHeader={false}/> 
            <div className='about_Container'>
                <h2>School</h2>
                <AboutContent
                    text='Software Development and Network Engineering, Sheridan College, Oakville'
                    text2='2022 - Present'
                    isSplit={true}
                />
                <hr />

                <h2>Technical Skills</h2>
                <AboutContent
                    text='Java, HTML, CSS, JavaScript, PHP, Node, React, Express, PostgreSQL, Git, Jest'
                />
                <hr/>

                <h2>Work</h2>
                <AboutContent
                    text='Z5 Courts, Mississauga'
                    text2='2019 - Present'
                    isSplit={true}
                />
            </div>
        </div>
    )
}

export default About