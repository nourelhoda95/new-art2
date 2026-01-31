import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Clients } from './components/Clients';
import { About } from './components/About';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import  Navbar  from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Header /> */}
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Clients />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
