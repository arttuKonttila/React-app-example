import "./categories.scss";
import { useSelector } from "react-redux";
import { Button, Image } from "react-bootstrap";

export default function Categories() {
  const { categoryItems } = useSelector((state) => state.categories);
  const mapCategories = categoryItems.map((category, index) => {
    return (
      <div className="category-item">
        <Button className="category-btn">
          <Image src={category.image} className="w-100 category-img rounded img-fluid" />
          <div className="category-img-overlay">
            <h3 className="overlay-text">{category.category}</h3>
          </div>
        </Button>
      </div>
    );
  });

  return <div className="category-container overflow-hidden">{mapCategories}</div>;
}
