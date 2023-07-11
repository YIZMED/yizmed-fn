import Blogs from './blogs/components';
import ThomeBanner from './blogs/components/homeBanner';
import Categories from './categories';
import Hero from './hero/components';

function HomePage() {
  return (
    <div>
      <Hero />
      <Categories />
      <Blogs />
      <ThomeBanner />
    </div>
  );
}
export default HomePage;
