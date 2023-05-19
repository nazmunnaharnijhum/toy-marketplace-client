/* eslint-disable react/prop-types */

const ToysCard = ({toy}) => {

    const {picture, name, price, rating} = toy;
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
        <td className="text-xl font-bold">
          ${price}
          <br/>
          <span className="badge badge-ghost badge-sm">You can get upto 30% discount</span>
        </td>
        <td className="text-xl font-bold">{rating}</td>
        <th>
        <button className="btn btn-outline btn-accent">View Toys Details</button>
        </th>
      </tr>
    </tbody>
    
    

    );
};

export default ToysCard;