import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToysTable from "./MyToysTable";


const MyToys = () => {
    const {user} = useContext(AuthContext);
    const [toys, setToys] = useState([]);

    useEffect(() =>{
        fetch(`http://localhost:5000/myToys/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setToys(data);
        })
    }, [user])

    return (
        <div>
            <div className="mt-12 mb-12 ">
            <div className="text-center">
                <h3 className="text-4xl text-teal-500 font-bold">My Toys</h3>
                <p className="text-bold text-2xl text-gray-600 mb-4">You can select your own warriors</p>
            </div>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr >
        <th>
          
        </th>
        
        
        <th className="font-bold">Toy Name</th>
        <th className="font-bold">Price</th>
        <th className="font-bold">Available <br /> Quantity</th>
        <th className="font-bold">Seller Name</th>
        <th className="font-bold">Sub-Category</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
                {
                    toys.map(toy => <MyToysTable
                    key={toy._id}
                    toy={toy}
                    ></MyToysTable>)
                }
            </table>
</div>
</div>
        </div>
    );
};

export default MyToys;