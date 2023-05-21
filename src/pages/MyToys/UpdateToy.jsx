/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";

const UpdateToy = ({props, handleUpdate}) => {
    const {user} = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
      // const { handleUpdate } = props;
    return (
        <div className="add-job-container">
      <div className="add-job row">
        
        
           <form className="grid grid-cols-3" onSubmit={handleSubmit(handleUpdate)}>
            {errors.exampleRequired && <span>This field is required</span>}
            <input
              className="text-input"
              {...register("name")}
              placeholder="toy name"
              defaultValue={props?.toy?.name}

              
            />

            <input
              className="text-input"
              {...register("rating", { required: true })}
              placeholder="rating"
              defaultValue={props?.toy?.rating}
              
            />

            <input
                className="text-input hidden"
              {...register("_id", { required: true })}
             
             value={props?.toy?._id}
              
            />
            
            <input
              className="text-input"
              {...register("quantity", { required: true })}
              placeholder="available quantity"
              type="number"
              defaultValue={props?.toy?.quantity}
            />
            <input
              className="text-input"
              {...register("price", { required: true })}
              placeholder="Price"
              type="number"
              defaultValue={props?.toy?.price}
            />
            
            <select className="text-input options" {...register("subCategory")}
            defaultValue={props?.toy?.subCategory}
            >
              <option value="avenger">Avenger</option>
              <option value="dc">DC</option>
              <option value="transformer">Transformer</option>
            </select>
            <input
              className="text-input"
              {...register("picture")}
              placeholder="Picture URL"
              type="url"
              defaultValue={props?.toy?.picture}
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
              defaultValue={props?.toy?.details}
            />
            <input className="submit-btn" value="Update" type="submit" />
            
          </form>
          </div>
           </div>
    );
};

export default UpdateToy;