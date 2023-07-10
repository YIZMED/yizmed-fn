import Blogs from './blogs/components';
import Categories from './categories';
import Hero from './hero/components';

function HomePage() {
  return (
    <div>
      <Hero />
      <Categories />
      <Blogs/>
    </div>
  );
}
export default HomePage;
