import { getHelloWorld } from "./lib/data";

export default async function Home() {
  const data = await getHelloWorld();
  return (
    <main>
      <div> {data} </div>
    </main>
  );
}
