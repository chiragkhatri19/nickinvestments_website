import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Philosophy from "@/components/Philosophy";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function App() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Philosophy />
        <Services />
        <Process />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
