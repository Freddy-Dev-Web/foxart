import Brading from "./components/Brading";
import BulletPoints from "./components/BulletPoints";
import CallToAction from "./components/CallToAction";
import Features from "./components/Features";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <Brading />
      <Features />
      <CallToAction/>
      <BulletPoints />
      <Pricing />
      <CallToAction minify/>
      <Footer />
    </main>
  );
}