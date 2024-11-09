import Hero from "../components/home/hero";
import Products from "../components/home/products";
import Categories from "../components/home/categories";

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <Categories />
      <Products />
    </div>
  );
}
