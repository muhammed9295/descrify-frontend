import Feature from "./components/Feature";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="px-10 lg:px-36">
      <Hero />
      <Feature />
    </main>
  );
}
