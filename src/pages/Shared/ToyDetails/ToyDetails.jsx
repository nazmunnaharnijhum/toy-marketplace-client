import { useLoaderData } from "react-router-dom";


const ToyDetails = () => {
    const toys = useLoaderData();
    const {picture, name, price, quantity, sellerName, details, sellerEmail, rating} = toys;

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={picture} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{details}</p>
    <p>Seller Name: {sellerName}</p>
    <p>Seller Email: {sellerEmail}</p>
    <p>Price: ${price}</p>
    <p>Rating: {rating}</p>
    <p>Available Quantity: {quantity}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-accent">Buy now</button>
    </div>
  </div>
</div>
    );
};

export default ToyDetails;