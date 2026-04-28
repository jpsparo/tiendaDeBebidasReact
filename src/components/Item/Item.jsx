import "./Item.css";

export default function Item({ name, description, price, image }) {
  return (
    <article className="card">
      <img src={image} alt={`foto de ${name}`} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p className="price">${price}</p>
      <button className="buy-btn">Comprar</button>
    </article>
  );
}
