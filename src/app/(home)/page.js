import Counter from "./components/Counter";
import Feature from "./components/Feature";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";

export default function Home() {
  return (
    <main className="px-10 lg:px-36">
      <Hero />
      <Feature />
      <Counter />
      <HowItWorks />
      <Pricing />
    </main>
  );
}
