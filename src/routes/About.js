import '../assets/styles/Container.css'
import Header from '../components/Header'
import AboutContent from '../components/AboutContent'

function About() {
    return (
        <div className='page_Container'>
            <Header text={'about me'} isMainHeader={false} size={200}/> 
            <div className='Container'>
                <h1>Me</h1>
                My name is Sam, I am a student at Sheridan College. Currently in second year of the Software Development and Network Engineering program. 
                <hr />
                <h2>School</h2>
                <AboutContent
                    text='Software Development and Network Engineering, Sheridan College, Oakville'
                    text2='2022 - Present'
                    isSplit={true}
                />
                <hr />

                <h2>Technical Skills</h2>
                <AboutContent
                    text='Java, Spring, HTML, CSS, JavaScript, PHP, Node, React, Express, PostgreSQL, Git, Jest, JUnit'
                />
                <hr />

                <h2>Courses</h2>
                <AboutContent
                    text='Object Oriented Programming - Java, Enterprise Java Development, Web Development and Web Programming, Linux/UNIX - Operating Systems, 
                    Cloud Enabled Networks, Database Design & Implementation, Computer & Network Security, Systems Development Methodologies'
                />
                <hr />

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