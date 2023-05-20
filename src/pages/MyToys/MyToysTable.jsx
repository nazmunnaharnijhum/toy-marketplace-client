
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyToysTable = ({toy}) => {
    const {_id, picture, name, price, quantity, sellerName, subCategory} = toy;

    const handleDelete = _id => {
       console.log(_id);
       Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
        
        
        fetch(`http://localhost:5000/myToys/${_id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                Swal.fire(
                    'Deleted!',
                    'Your toy has been deleted.',
                    'success'
                  )
            }
        })

        }
      })
    }

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
        <Link><button className="btn btn-outline btn-accent">Update</button></Link>
        </th>
        <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-outline btn-accent">Delete</button>
        </th>
      </tr>
    </tbody>
    );
};

export default MyToysTable;