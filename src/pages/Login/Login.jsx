import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { Link } from "react-router-dom";

const Login = () => {

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
    })
    .catch(error =>{
      console.log('error', error.message);
    })
  }

  const handleLogin = event => {
    event.preventDefault();
  }

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left w-1/2">

        <img className="h-[600px] w-[700px]" src="https://i.ibb.co/9WyZsKz/open-door-g00cdafdfc-1280.png" alt="" />

      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <form onSubmit={handleLogin}>
        <div className="form-control">
        <h1 className="text-4xl font-bold text-center mb-2">Login</h1>
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
          
          <input className="btn btn-accent" type="submit" value="Login" />
        </div>
        <div className="my-3">New to ToyWarriors? <Link to="/register" className="text-teal-500">Register</Link></div>
        </form>
        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-accent"><FaGoogle style={{marginRight:"8px", fontSize:"20px", color:"green"}}/> Google Sign-in</button>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;