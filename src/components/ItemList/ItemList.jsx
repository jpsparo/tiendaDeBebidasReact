import Item from "../Item/Item";
import "./ItemList.css";
import { Link } from "react-router-dom";

export default function ItemList({ products }) {
  if (!products.length) {
    return <p className="empty">No hay productos</p>;
  }

  return (
    <div className="products-container">
      {products.map((product) => (
        <Item key={product.id} {...product}>

          <Link
            to={`/product/${product.id}`}
            className="btn detail-btn"
          >
            Ver detalle
          </Link>

        </Item>
      ))}
    </div>
  );
}