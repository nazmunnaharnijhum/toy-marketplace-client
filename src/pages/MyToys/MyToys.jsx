import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToysTable from "./MyToysTable";
import Swal from "sweetalert2";


const MyToys = () => {

    useEffect(() => {
        document.title = "ToyWarriors | My Toys";
    }, []);
    const {user} = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() =>{
        fetch(`https://toy-marketplace-assignment-11-server-nazmunnaharnijhum.vercel.app/myToys/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setToys(data);
        })
        
    }, [user, control])

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
         
         
         fetch(`https://toy-marketplace-assignment-11-server-nazmunnaharnijhum.vercel.app/myToys/${_id}`, {
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
                   const remaining = toys.filter(toy => toy._id !== _id);
                   setToys(remaining);
             }
         })
 
         }
       })
     }


     const handleUpdate = (data) => {
        console.log(data);
        fetch(`https://toy-marketplace-assignment-11-server-nazmunnaharnijhum.vercel.app/updateToys/${data?._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.modifiedCount > 0) {
              setControl(!control);
            }
            console.log(result);
          });
      };
    

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
                    handleDelete={handleDelete}
                    handleUpdate={handleUpdate}
                    ></MyToysTable>)
                }
            </table>
</div>
</div>
        </div>
    );
};

export default MyToys;