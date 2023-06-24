import { Link } from "react-router-dom";


const CategoryData = ({toy}) => {
    const {_id, picture, name, price, rating} =toy;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{price}</p>
    <p>{rating}</p>
    <div className="card-actions justify-end">
    <Link to={`/details/${_id}`}><button className="btn btn-outline btn-accent">View Toys Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default CategoryData;