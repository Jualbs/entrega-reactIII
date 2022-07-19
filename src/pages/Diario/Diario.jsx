import Header from "../../components/Header/Header";
import Skills from "../../components/Skills/Skills";
import Learning from "../../components/Learning/Learning";
import learning_image from "../../assets/learning-image.svg";

function Diario() {
  return (
    <>
      <Header
        image={learning_image}
        description="imagem mulher estudando"
      >
        Diário da Reprograma
      </Header>
      <Skills title="O que eu aprendi até o momento?" />
      <Learning
        subtitle="Github"
        gif="https://media.giphy.com/media/jIRPOnUASNsQw/giphy.gif"
        text="Github foi uma caixinha de surpresas pra mim, pois no começo parecia muito fácil, mas ainda hoje me pego batendo cabeça pra resolver algo simples nele haha"
      />
      <Learning
        subtitle="HTML"
        gif="https://media.giphy.com/media/TilmLMmWrRYYHjLfub/giphy.gif"
        text="Eu adorei aprender HTML, já tinha tido uma breve experiência com ele quando fazia blogs mais nova e poder me aprofundar nas aulas da reprograma me motivou muito!"
      />
      <Learning
        subtitle="CSS"
        gif="https://media.giphy.com/media/VuDjPypv6aem4/giphy.gif"
        text="Adoro o CSS! Às vezes passo horas enfeitando o código e cuidando da perfumaria. Não tive muita dificuldade, mas fico certa que isso se deu graças às aulas que tive com as professoras da reprograma."
      />
      <Learning
        subtitle="JavaScript"
        gif="https://media.giphy.com/media/5xtDaru7nxqniasZjgY/giphy.gif"
        text="Socorro Deus! Um baita desafio, considero que ainda estou em aprendizado, é uma linguagem muito bacana, mas bem complexa pra quem está iniciando."
      />
    </>
  );
}

export default Diario;
