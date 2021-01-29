import Head from "next/head";
import { BoxContainer } from "./style";
import { Footer, GitHubCorner, QuizBackground } from "../components";
import { CardTop, CardDown } from "../components/Cards";
import db from "../db.json";

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuiz - Modelo Base</title>
      </Head>
      <BoxContainer>
        <CardTop />
        <CardDown />
        <Footer />
      </BoxContainer>
      <GitHubCorner projectUrl="https://github.com/beatriciramos" />
    </QuizBackground>
  );
}
