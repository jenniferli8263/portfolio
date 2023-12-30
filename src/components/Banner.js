import { useState, useEffect } from "react";
import { Container, Row,Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";

function About(){
    const [wordInd, setWordInd] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [" Software Engineer", " Web Developer", "n AI Enthusiast"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(150);
    const period = 1300;


    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)
        return ()=> {clearInterval(ticker)};
    }, [text])

    const tick = () =>{
        let i = wordInd % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1);
        setText(updatedText);

        if(isDeleting){
            setDelta(110);
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }
        else if (isDeleting && updatedText === ''){ /*deleted all of the current word*/
            setIsDeleting(false);
            setWordInd(wordInd+1);
            setDelta(600);
        }
        else if(!isDeleting && updatedText !=='' && updatedText !== fullText){
            setDelta(150);
        }

    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className = "align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1>Hi! My name is Jennifer</h1>
                        <h1>{`I'm a`}<span className="wrap">{text}</span></h1>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="header img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About;