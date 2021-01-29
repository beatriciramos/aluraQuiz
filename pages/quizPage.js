import { BoxContainer } from "./style";
import { GitHubCorner, QuizBackground } from "../components";
import { CardTop } from "../components/Cards";
import db from "../db.json";

export default function QuizPage() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <BoxContainer>
        <CardTop />
      </BoxContainer>
      <GitHubCorner projectUrl="https://github.com/beatriciramos" />
    </QuizBackground>
  );
}
