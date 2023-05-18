import { useEffect, useState } from "react";
import ToysCard from "./ToysCard";


const Toys = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('toys.json')
        .then(res => res.json())
        .then(data => setToys(data));
    },[])
    return (
        <div className="mt-12">
            <div className="text-center">
                <h3 className="text-4xl text-blue-300 font-bold">Our Toys</h3>
                <p className="text-bold text-2xl text-gray-600">You can select your own warriors</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                {
                    toys.map(toy => <ToysCard
                    key={toy._id}
                    toy={toy}
                    ></ToysCard>)
                }
            </div>
        </div>
    );
};

export default Toys;