import { useEffect, useState } from "react";
import ToysCard from "../Home/Toys/ToysCard";


const ToyTable = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('toys.json')
        .then(res => res.json())
        .then(data => setToys(data));
    },[])
    return (
        <div>
            <div className="mt-12 mb-12 ">
            <div className="text-center">
                <h3 className="text-4xl text-teal-500 font-bold">Our Toys</h3>
                <p className="text-bold text-2xl text-gray-600 mb-4">You can select your own warriors</p>
            </div>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr >
        <th>
          
        </th>
        
        
        <th className="text-xl font-bold">Toy Name</th>
        <th className="text-xl font-bold">Price</th>
        <th className="text-xl font-bold">Rating</th>
        <th></th>
      </tr>
    </thead>
                {
                    toys.map(toy => <ToysCard
                    key={toy._id}
                    toy={toy}
                    ></ToysCard>)
                }
            </table>
</div>
</div>
        </div>
    );
};

export default ToyTable;