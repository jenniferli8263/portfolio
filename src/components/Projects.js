import {Container, Row, Col} from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg3 from "../assets/img/project-img3.png";
import clubConnect from '../assets/img/clubconnect.png';
import osTranslate from '../assets/img/ostranslate.png';
import pathfinder from '../assets/img/pathfinder.png';
import studyspace from '../assets/img/studyspace.png';
import wattendance from '../assets/img/wattendance.png';
/*NPM RUN DEPLOY TO UPDATE GH PAGES*/

function Projects(){
    const projects = [
        {
            title: "Wattendance",
            description: "Full-stack application that uses facial recognition on a Raspberry Pi to track and update students' attendance records in real time",
            imgUrl: wattendance,
            projLink: "https://github.com/jenniferli8263/wattendance"
        },
        {
            title: "PathFinder",
            description: "Processing program with a GUI simulating Dijkstra's algorithm, allowing users to create/generate graphs and find the shortest path between nodes",
            imgUrl: pathfinder,
            projLink: "https://github.com/jenniferli8263/PathFinder"
        },
        {
            title: "OSTranslate",
            description: "A Flask Application that summarizes and translates text, audio and video files using APIs from Symbl.ai and Google Translate",
            imgUrl: osTranslate,
            projLink: "https://github.com/jenniferli8263/ostranslate"
        },
        // {
        //     title: "StudySpace",
        //     description: "A Processing program that boosts users' productivity through the use of to-do lists, timers, and relaxing music",
        //     imgUrl: studyspace,
        //     projLink: "https://github.com/jenniferli8263/studyspace"

        // },
        {
            title: "University ClubConnect",
            description: "A website where new university students can find compatible clubs to join at their university after taking a personality quiz",
            imgUrl: clubConnect,
            projLink: "https://github.com/jenniferli8263/university-clubconnect"
        },
    ];

    return(
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <h1>Projects</h1>
                    </Col>
                </Row>
                <Row className="project-start">
                    {
                    projects.map((project, index) => {
                        return (
                            <Col>
                                <ProjectCard 
                                key={index}
                                {...project}
                                />
                            </Col>
                        )
                    })
                    }
                </Row>
            </Container>
        </section>
    )
}

export default Projects;