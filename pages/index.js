import { BoxContainer } from "./style";
import { Cards, Footer, GitHubCorner, QuizBackground } from "../components";
import db from "../db.json";

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <BoxContainer>
        <Cards />
        <Footer />
      </BoxContainer>
      <GitHubCorner projectUrl="https://github.com/beatriciramos" />
    </QuizBackground>
  );
}
