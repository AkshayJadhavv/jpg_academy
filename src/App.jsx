import Loader from './components/Loader';
import ScrollProgress from './components/ScrollProgress';
import FloatingWhatsApp from './components/FloatingWhatsApp';
// import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import ScrollingAnnouncementBar from './components/ScrollingAnnouncementBar';
import StudentWorkShowcase from './components/StudentWorkShowcase';
import BlogSection from './components/BlogSection';


import Hero from './sections/Hero';
import About from './sections/About';
import Campus from './sections/Campus';
import Courses from './sections/Courses';
import Gallery from './sections/Gallery';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import ReelsShowcase from './sections/ReelsShowcase';


export default function App() {
  return (
    <>
      <Loader />
      <ScrollProgress />
      <FloatingWhatsApp />

      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main>
          <Hero />
          <ScrollingAnnouncementBar />  
          <About />
          <Campus />
          <Courses />
          <Gallery />
          <StudentWorkShowcase />
          <ReelsShowcase />
          <BlogSection />
          <Testimonials />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}
