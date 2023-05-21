import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryData from "./CategoryData";


const Category = () => {
    const [activeTab, setActiveTab] = useState("gvg");
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/toys/${activeTab}`)
        .then(res => res.json())
        .then(result => {
            setToys(result);
        });
    }, [activeTab]);

    

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    }

    return (
        <div className="flex justify-center my-12">
  <div>
  <div className="w-96">
    <div className="flex justify-center">
      <div className="space-x-4">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-center text-teal-500 mt-12 mb-2">Category</h2>
        <p className="font-bold text-center text-gray-500  mb-4">Select toys by categories</p>
        
        </div>
      <div className="tabs tabs-boxed">
  <Link onClick={() => handleTabClick("avenger")} className="tab ">Avenger</Link> 
  <Link onClick={() => handleTabClick("dc")} className="tab tab-active ">DC</Link> 
  <Link onClick={() => handleTabClick("transformer")} className="tab ">Transformer</Link>
</div>
     
      </div>
    </div>
  </div>
  </div>
  <div className="jobs-container mt-5 row">
        {toys?.map((toy) => (
            <CategoryData 
            key={toy._id}
            toy={toy}
            ></CategoryData>
         
        ))}
      </div>
</div>

    );
};

export default Category;