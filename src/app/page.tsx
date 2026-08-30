import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { FeaturedProjects } from '@/components/FeaturedProjects'
import { Technologies } from '@/components/Technologies'
import { Leadership } from '@/components/Leadership'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedProjects />
        <Technologies />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
