import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

function SkillBar({skill, time, max}){
    const now = time/max * 100;
    let label = '';
    if(time > 12){
        label = time/12 + ' years';
    }
    else if (time === 12){
        label = "1 year";
    }
    else{
        label = time + ' months';
    }
    return (
        <Container>
            <Row>
                <Col>
                    <p>{skill}</p>
                    <ProgressBar now = {now} label = {label} />
                </Col>
            </Row>
        </Container>
    )
}

export default SkillBar;