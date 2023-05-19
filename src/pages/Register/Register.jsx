import { Link } from "react-router-dom";



const Register = () => {
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
        <form>
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
        <div className="form-control mt-6">
          
          <input className="btn btn-accent" type="submit" value="Register" />
        </div>
        <div className="my-3">Already Have an Account? <Link to="/login" className="text-teal-500">Register</Link></div>
        </form>
       
      </div>
    </div>
  </div>
</div>
    );
};

export default Register;