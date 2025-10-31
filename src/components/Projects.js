import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import projImg7 from "../assets/img/whatsapp.avif";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Proj",
      description:
        "web app built using the MERN stack",
      imgUrl: projImg7,
      link: "#",
    },

    {
      title: "Proj",
      description:
        "web app built using the MERN stack",
      imgUrl: projImg7,
      link: "#",
    },
    {
      title: "Proj",
      description:
        "web app built using the MERN stack",
      imgUrl: projImg7,
      link: "#",
    },
    {
      title: "Proj",
      description:
        "web app built using the MERN stack",
      imgUrl: projImg7,
      link: "#",
    },
    {
      title: "Proj",
      description:
        "web app built using the MERN stack",
      imgUrl: projImg7,
      link: "#",
    },
    {
      title: "Proj",
      description:
        "web app built using the MERN stack",
      imgUrl: projImg7,
      link: "#",
    },
  ];

  const projects2 = [
 {
      title: "Proj",
      description:
        "web app built using the MERN stack",
      imgUrl: projImg7,
      link: "#",
    },

    {
      title: "Proj",
      description:
        "web app built using the MERN stack",
      imgUrl: projImg7,
      link: "#",
    },
    {
      title: "Proj",
      description:
        "web app built using the MERN stack",
      imgUrl: projImg7,
      link: "#",
    },
    {
      title: "Proj",
      description:
        "web app built using the MERN stack",
      imgUrl: projImg7,
      link: "#",
    },
    {
      title: "Proj",
      description:
        "web app built using the MERN stack",
      imgUrl: projImg7,
      link: "#",
    },
    {
      title: "Proj",
      description:
        "web app built using the MERN stack",
      imgUrl: projImg7,
      link: "#",
    },

  ];

  const projects3 = [
    {
      title: "Proj",
      description:
        "web app built using the MERN stack",
      imgUrl: projImg7,
      link: "#",
    },

    {
      title: "Proj",
      description:
        "web app built using the MERN stack",
      imgUrl: projImg7,
      link: "#",
    },
    {
      title: "Proj",
      description:
        "web app built using the MERN stack",
      imgUrl: projImg7,
      link: "#",
    },
    {
      title: "Proj",
      description:
        "web app built using the MERN stack",
      imgUrl: projImg7,
      link: "#",
    },
    {
      title: "Proj",
      description:
        "web app built using the MERN stack",
      imgUrl: projImg7,
      link: "#",
    },
    {
      title: "Proj",
      description:
        "web app built using the MERN stack",
      imgUrl: projImg7,
      link: "#",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    In project section, we have three tabs. The first tab
                    features a Flutter and Riverpod project, while the second
                    tab showcases a React project..
                    <br /> Reach out to my github profile{" "}
                    <a
                      href="#"
                      style={{ color: "white" }}
                    >
                      HERE
                    </a>{" "}
                    to see all the projects in detail.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects3.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
