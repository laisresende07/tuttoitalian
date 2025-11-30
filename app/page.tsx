
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AboutSection from '../components/About';
import MenuSection from '../components/Menu';
import SpecialMenu from '../components/SpecialMenu';

const Page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <MenuSection />
      <SpecialMenu />
      <Footer />
    </>
  );
};

export default Page;
