import { useRouter } from "next/router";
import { Card, CardContent, CardHeader, InputBase, Button } from "../style";

export default function CardTop() {
  const router = useRouter();
  const [name, setName] = React.useState("");

  return (
    <>
      <Card>
        <CardHeader>
          <h1>Princess of Disney</h1>
        </CardHeader>
        <CardContent className="top">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              router.push(`/quizPage?name=${name}`);
            }}
          >
            <InputBase
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Diz ai seu nome"
            />
            <Button type="submit" disabled={name.length === 0}>
              {`Vamos ${name}?`}
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
