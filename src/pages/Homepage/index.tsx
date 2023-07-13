import ThomeBanner from './testimonial/components/homeBanner';
import Categories from './categories';
import Hero from './hero/components';
import Testimonial from './testimonial/components';
import Blogs from './blogs/components';
import Navbar from '../NavBar/components';
import Footer from '../Footer/Components';

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Blogs />
      <Testimonial />
      <ThomeBanner />
      <Footer />
    </>
  );
}
export default HomePage;
