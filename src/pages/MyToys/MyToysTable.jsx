
// import { useState } from "react";

// import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
// import UpdateToy from "./UpdateToy";


const MyToysTable = ({toy, handleDelete, handleUpdate}) => {
  // console.log(handleUpdate);

   
//   const [control, setControl] = useState(false);
    

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
        <Link to={`/updateToy/${_id}`}
        
        >
        <button onClick={() => handleUpdate(_id)}
                   className="btn btn-outline btn-accent"
                    >Update</button>
        </Link>
        </th>
        <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-outline btn-accent">Delete</button>
        </th>
      </tr>
    </tbody>
    );
};

export default MyToysTable;