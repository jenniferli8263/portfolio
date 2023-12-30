import {Card, Button} from "react-bootstrap";
import githubIcon from "../assets/img/github-mark-white.svg";
function ProjectCard({title, description, imgUrl,projLink}){
    // const cardStyle = { 
    //     width: '25rem', 
    //     margin: '20px 0px',
    //     backgroundColor: '#212252',
    //     opacity: '0.8',
    //     color:'white'
    // }
    return (
        <Card className="projCard">
          <Card.Img variant="top" src={imgUrl} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
            {/* <Button variant="primary" href={projLink} target="_blank">Go somewhere</Button> */}
            <a href={projLink} target="_blank"><img className="cardImg" src = {githubIcon} /></a>
            {/* <Card.Img src={githubIcon} href={projLink} target="_blank"></Card.Img> */}
          </Card.Body>
        </Card>
      );
}

export default ProjectCard;