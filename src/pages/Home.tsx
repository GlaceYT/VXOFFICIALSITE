
import Navbar from '../components/Navbar';
import LandingPage from '../components/Home/LandingPage';
import Pricing from '../components/Home/Pricing';
import Features from '../components/Home/Features';
import Footer from '../components/Home/Footer';
import Stats from '../components/Home/Stats';

function Home() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Pricing />
      <Features />
      <Stats/>
      <Footer />
    </>
  );
}

export default Home;
