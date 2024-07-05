import { useEffect, useState } from "react";
import ToysCard from "../Home/Toys/ToysCard";


const ToyTable = () => {
    const [toys, setToys] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetch('https://toy-marketplace-assignment-11-server-nazmunnaharnijhum.vercel.app/toys')
        .then(res => res.json())
        .then(data => setToys(data));
    },[])


    const handleSearch = () => {
        fetch(`https://toy-marketplace-assignment-11-server-nazmunnaharnijhum.vercel.app/toySearchByTitle/${searchText}`)
        .then(res => res.json())
        .then(data => {
            setToys(data);
        });
    }
    return (
        <div>
            <div className="mt-12 mb-12 ">
            <div className="text-center">
                <h3 className="text-4xl text-teal-500 font-bold">Our Toys</h3>
                <p className="text-bold text-2xl text-gray-600 mb-4">You can select your own warriors</p>
                <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            className="p-2"
          />{" "}
          <button onClick={handleSearch} className="btn btn-outline btn-accent" >Search</button>
            </div>
            <div className="overflow-x-auto w-full mt-12">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr >
        <th>
          
        </th>
        
        
        <th className="font-bold">Toys</th>
        <th className="font-bold">Price</th>
        <th className="font-bold">Available <br /> Quantity</th>
        <th className="font-bold">Seller Name</th>
        <th className="font-bold">Sub-Category</th>
        <th></th>
      </tr>
    </thead>
                {
                    toys.map(toy => <ToysCard
                    key={toy._id}
                    toy={toy}
                    setToys={setToys}
                    ></ToysCard>)
                }
            </table>
</div>
</div>
        </div>
    );
};

export default ToyTable;