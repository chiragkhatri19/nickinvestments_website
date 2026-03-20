import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Stats from "@/components/Stats"
import Philosophy from "@/components/Philosophy"
import Services from "@/components/Services"
import Process from "@/components/Process"
import Testimonials from "@/components/Testimonials"
import ContactForm from "@/components/ContactForm"
import Footer from "@/components/Footer"
import FloatingCTA from "@/components/FloatingCTA"

export default function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#E67E22] focus:text-white focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to main content
      </a>

      <div className="min-h-screen w-full">
        <Navbar />
        <main id="main-content">
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
    </>
  )
}
