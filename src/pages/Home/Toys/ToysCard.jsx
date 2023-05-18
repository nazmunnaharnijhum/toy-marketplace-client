
const ToysCard = ({toy}) => {
    const {picture, name, price, rating} = toy;
    return (
        <div className="card w-auto glass">
  <figure><img src={picture} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Price: ${price}</p>
    <p>Rating: {rating}</p>
    
    <button className="btn btn-outline btn-accent">View Toys Details</button>
    
  </div>
</div>
    );
};

export default ToysCard;