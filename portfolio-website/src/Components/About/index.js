import React, {useState} from 'react'
import { 
    AboutContainer, 
    Column1,
    TextWrapper,
    Heading,
    Subtitle,
    Column2,
    ImgWrap,
    Img,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
    Button,
    AboutH2
} from './AboutElems'

const aboutMe = {
    id: 'about',
    headline: 'Claudia Gonzalez-Casales',
    description:`I am a motivated software engineer with the ability to challenge others and myself to develop solutions to problems and situations. I am driven by growth within this field of work. I have shown a strong understanding of both individual and team goals to collaboratively work towards a common goal. My overall goal as a software engineer is to simplify solutions to technology’s complex problems and use the knowledge I already possess to keep improving the quality and ease of work through software. I also have strong organizational skills that allow efficient progression and division of tasks amongst my peers and myself.`,
    buttonLabel: '',
}


const About = ({
    id,
    headline,
    description,
    alt
}) => {
        const [hover, setHover] = useState(false);
      
        const onHover = () => {
          setHover(!hover);
        };

        return (
            <AboutContainer id={id}>
    
                    <Column1>
                        <TextWrapper>
                        <Heading >{headline} </Heading>
                        <AboutH2>London, UK</AboutH2>
                        <Subtitle> {description} </Subtitle>
                        <HeroBtnWrapper>
                        <Button
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            // onClick={onResumeClick}
                        >
                          Download Resume {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
                      </HeroBtnWrapper>
                        </TextWrapper>
                    </Column1>
    
            </AboutContainer>
        )
    }
    
    export default About