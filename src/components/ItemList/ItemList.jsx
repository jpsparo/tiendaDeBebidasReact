import Item from "../Item/Item";
import "./ItemList.css";

export default function ItemList({ products }) {
  if (!products.length) {
    return <p className="empty">No hay productos</p>;
  }

  return (
    <div className="products-container">
      {products.map((product) => (
        <Item key={product.id} {...product} />
      ))}
    </div>
  );
}