import {
  StyledMain,
  Container,
  Rings,
  Nav,
  Projects,
} from "./styles/Main.styled";

import Project from "./Project";
import Skill from "./Skill";
import Header from "./Header";
import Footer from "./Footer";

export default function Main() {
  return (
    <StyledMain>
      <Header />
      <Container>
        <Skill skill={"HTML"} years={4} />
        <Skill skill={"CSS"} years={4} />
        <Skill skill={"Javascript"} years={4} />
        <Skill skill={"Accessibility"} years={4} />
        <Skill skill={"React"} years={3} />
        <Skill skill={"Sass"} years={3} />
      </Container>
      <Rings>
        <img src="./images/pattern-rings.svg" alt="rings" />
      </Rings>
      <Nav>
        <p>Projects</p>

        <p>
          <a href="#contact">CONTACT ME </a>
        </p>
      </Nav>
      <Projects>
        <Project
          src_large={"./images/projects/thumbnail-project-1-large.webp"}
          src_small={"./images/projects/thumbnail-project-1-small.webp"}
          name={"DESIGN PORTFOLIO"}
          techstack={"HTML CSS"}
        />
        <Project
          src_large={"./images/projects/thumbnail-project-2-large.webp"}
          src_small={"./images/projects/thumbnail-project-2-small.webp"}
          name={"E-LEARNING LANDING PAGE"}
          techstack={"HTML CSS"}
        />
        <Project
          src_large={"./images/projects/thumbnail-project-3-large.webp"}
          src_small={"./images/projects/thumbnail-project-3-small.webp"}
          name={"TODO WEB APP"}
          techstack={"HTML CSS JAVASCRIPT"}
        />
        <Project
          src_large={"./images/projects/thumbnail-project-4-large.webp"}
          src_small={"./images/projects/thumbnail-project-4-small.webp"}
          name={"ENTERTAINMENT WEB APP"}
          techstack={"HTML CSS JAVASCRIPT"}
        />
        <Project
          src_large={"./images/projects/thumbnail-project-5-large.webp"}
          src_small={"./images/projects/thumbnail-project-5-small.webp"}
          name={"MEMORY GAME"}
          techstack={"HTML CSS JAVASCRIPT"}
        />
        <Project
          src_large={"./images/projects/thumbnail-project-6-large.webp"}
          src_small={"./images/projects/thumbnail-project-6-small.webp"}
          name={"ART GALLERY SHOWCASE"}
          techstack={"HTML CSS JAVASCRIPT"}
        />
      </Projects>
      <Footer />
    </StyledMain>
  );
}
