/* eslint-disable no-unused-vars */
import { useContext, useEffect } from "react";
import './AddToy.css';
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const AddToy = () => {
    const {user} = useContext(AuthContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) =>{
    fetch('https://toy-marketplace-assignment-11-server-nazmunnaharnijhum.vercel.app/postJob', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
        console.log(result);
        Swal.fire('Successfully added a toy')
    })
     console.log(data);
  };

  useEffect(() => {
    document.title = "ToyWarriors | Add a Toy";
}, []);
    return (
        <div className="add-job-container">
      <div className="add-job row">
        
        
           <form className="grid grid-cols-3" onSubmit={handleSubmit(onSubmit)}>
            {errors.exampleRequired && <span>This field is required</span>}
            <input
              className="text-input"
              {...register("name")}
              placeholder="toy name"
              
            />

            <input
              className="text-input"
              {...register("rating", { required: true })}
              placeholder="rating"
              
            />
            <input
              className="text-input"
              {...register("quantity", { required: true })}
              placeholder="available quantity"
              type="number"
            />
            <input
              className="text-input"
              {...register("price", { required: true })}
              placeholder="Price"
              type="number"
            />
            
            <select className="text-input options" {...register("subCategory")}>
              <option value="avenger">Avenger</option>
              <option value="dc">DC</option>
              <option value="transformer">Transformer</option>
            </select>
            <input
              className="text-input"
              {...register("picture")}
              placeholder="Picture URL"
              type="url"
              
            />
            <input
              className="text-input"
              value={user?.displayName}
              {...register("sellerName")}
              placeholder="Your name"
             
            />
            <input
              className="text-input"
              value={user?.email}
              {...register("sellerEmail")}
              placeholder="your email"
              type="email"
            />
            
            <input
              className="text-input"
              {...register("details")}
              placeholder="description"
            />
            <input className="submit-btn" value="Add a Toy" type="submit" />
          </form>
          </div>
           </div>
    
    );
};

export default AddToy;