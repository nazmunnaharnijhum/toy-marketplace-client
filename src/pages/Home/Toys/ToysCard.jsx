/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ToysCard = ({toy}) => {

    const {_id, picture, name, price, quantity, sellerName, subCategory} = toy;
    return (       


  
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          
        </th>
        <td>
          <div className="flex items-center space-x-3 text-xl font-bold">
            <div className="avatar">
              <div className="rounded-xl w-60 h-60">
                <img src={picture} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              
            </div>
          </div>
        </td>
        <td className=" font-bold">
          ${price}
          
        </td>
        <td className="font-bold">{quantity}</td>
        <td className="font-bold">{sellerName}</td>
        <td className="font-bold">{subCategory}</td>
        <th>
        <Link to={`/details/${_id}`}><button className="btn btn-outline btn-accent">View Toys Details</button></Link>
        </th>
      </tr>
    </tbody>
    
    

    );
};

export default ToysCard;