import Contact from "./components/Contact";
import Counter from "./components/Counter";
import FAQ from "./components/FAQ";
import Feature from "./components/Feature";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main className="px-10 lg:px-36">
      <Hero />
      <section id="feature">
      <Feature />
      </section>
      <Counter />
      <HowItWorks />
      <section id="pricing">
      <Pricing />
      </section>
      <Testimonials />
      <FAQ />
      <section id="contact">
      <Contact />
      </section>
    </main>
  );
}
