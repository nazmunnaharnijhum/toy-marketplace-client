import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const [error, setError] = useState('');
    // const [user, setUser] = useState(null);
  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log('login location', location)
  const from = location.state?.from?.pathname || '/'
  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
    .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true})
            setError('');
            form.reset();
    })
    .catch(error => {
      console.log('error', error.message)
      setError(error.message);
    })
  }

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      navigate(from, { replace: true})
    })
    .catch(error =>{
      console.log('error', error.message);
    })
  }

  useEffect(() => {
    document.title = "ToyWarriors | Login";
}, []);
 

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left w-1/2">

        <img className="ml-6 rounded-3xl" src="https://i.ibb.co/d2nq9Qy/login-nl-cover.jpg"   alt="" />

      
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
        <p className="text-error">{error}</p>
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