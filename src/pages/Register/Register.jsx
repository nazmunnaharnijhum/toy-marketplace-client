import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";



const Register = () => {
    const [error, setError] = useState('');
    const { createUser } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password)
        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser);
            setError('');
            form.reset();
            updateUserData(result.user, name, photo);
        })
        .catch(error => {
            console.log(error.message);
            setError(error.message);
        })
    }

    const updateUserData = (user,name, photo) => {
        updateProfile(user,{
            displayName: name ,photoURL:photo
        })
        .then(() =>{
            console.log('user name updated')
        })
        .catch(error => {
            setError(error.message);
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left w-auto">

      <div className="ms-12">
        <p className="text-xl font-bold">SIGN UP TODAY AND YOU WILL BE ABLE TO :</p>
        <p className="my-4">The Loke Buyer Protection has you covered from click to delivery. <br /> Sign up
or sign in and you will be able to:</p>
        <ul className="list-disc  font-bold">
            <li>Speed your way through checkout</li>
            <li>Track your orders easily</li>
            <li>Keep a record of all your purchases</li>
        </ul>
      </div>

      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <form onSubmit={handleRegister}>
        <div className="form-control">
        <h1 className="text-3xl font-bold text-center mb-2">Register Here</h1>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="name" required className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name="photo" placeholder="photo url" required className="input input-bordered" />
          
        </div>

          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" required className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" required className="input input-bordered" />
          
        </div>
        <p className="text-error">{error}</p>
        <div className="form-control mt-6">
          
          <input className="btn btn-accent" type="submit" value="Register" />
        </div>
        <div className="my-3">Already Have an Account? <Link to="/login" className="text-teal-500">Login</Link></div>
        </form>
       
      </div>
    </div>
  </div>
</div>
    );
};

export default Register;