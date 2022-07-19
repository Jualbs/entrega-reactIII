import Header from "../../components/Header/Header";
import Repositories from "../../components/Repositories/Repositories";
import image from "../../assets/portfolio-image.svg";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";

function Portfolio() {
  return (
    <>
      <Header image={image} description="ilustracao mulher com projetos">
        Meus projetos
      </Header>
      <Skills title="4 projetos realizados na Reprograma" />
      <Projects />
      <Skills title="Outros projetos do meu GitHub" />
      <Repositories />
    </>
  );
}

export default Portfolio;
