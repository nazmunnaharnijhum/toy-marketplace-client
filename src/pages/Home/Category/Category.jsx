/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

import CategoryData from "./CategoryData";


const Category = () => {
    const [activeTab, setActiveTab] = useState("avenger");
    console.log(activeTab);
    const [toys, setToys] = useState([]);

    // useEffect(() => {
    //     fetch(`https://toy-marketplace-assignment-11-server-nazmunnaharnijhum.vercel.app/toys/${activeTab}`, {mode: 'no-cors'})
    //     .then(res => res.json())
    //     .then(data => {
    //         console(data);
    //     })
    // }, [activeTab]);

    useEffect(() => {
		fetch(`https://toy-marketplace-assignment-11-server-nazmunnaharnijhum.vercel.app/toys/${activeTab}`)
			.then((res) => res.json())
			.then((result) => {
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
  <button onClick={() => handleTabClick("avenger")} className={activeTab=="avenger"?" tab tab-active":"tab"}>Avenger</button> 
  <button onClick={() => handleTabClick("dc")} className={activeTab=="dc"?" tab tab-active":"tab"}>DC</button> 
  <button onClick={() => handleTabClick("transformer")} className={activeTab=="transformer"?" tab tab-active":"tab"}>Transformer</button>
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