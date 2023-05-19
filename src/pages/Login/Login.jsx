import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";

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

      {/* <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <form onSubmit={handleLogin}>
        <div className="form-control">
        <h1 className="text-4xl font-bold text-center mb-2">Login</h1>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          
          <input className="btn btn-primary" type="submit" value="Login" />
        </div>
        <button></button>
        </form>
        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-accent"><FaGoogle/> Google Sign-in</button>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;