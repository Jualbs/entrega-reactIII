import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import profile_image from "../../assets/profile.png";
import about_me_image from "../../assets/about-me-image.svg";

function Sobre() {
  return (
    <>
      <Header
        image={about_me_image}
        description="imagem ilustracao mulher"
      >
        Sobre mim
      </Header>
      <About
        image={profile_image}
        title="Prazer, Juliana"
        text="Sou aluna da turma On17 da Reprograma, atualmente trabalhando como Tech Recruiter e com uma vontade imensa de me aprofundar cada vez mais nesse universo tech."
        />"
    </>
  );
}

export default Sobre;
