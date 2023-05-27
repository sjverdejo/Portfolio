import '../assets/styles/AboutContent.css'

function AboutContent({text, text2, isSplit}) {
    if (isSplit) {
        return (
            <div className='split'>
                <div className='left'>
                    {text}
                </div>
                <div className='right'>
                    {text2}
                </div>
            </div>
        )
    } else {
        return (
            <div>
                {text}
            </div>
        )
    }
}

export default AboutContent