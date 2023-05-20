import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";


const NavBar = () => {
  const {user,logOut} = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
    .then()
    .catch(error => console.log(error));
}
  
    const navItems = <>
    <li><Link to="/">Home</Link></li>
        <li><Link to="allToys">All Toys</Link></li>
        <li><Link to="myToys">My Toys</Link></li>
        <li><Link to="addToy">Add A Toy</Link></li>
        <li><Link>Blogs</Link></li>
        <>{ user ?
            <>
                <li>
           <button onClick={handleLogOut}>Logout</button>
           </li>
          <li className="tooltip" data-tip={user.displayName}>
          <img style={{width:'60px'}} src={user.photoURL} />
          </li>
            </>: 
           <li><Link to="/login">
           <button>Login</button>
           </Link></li>
           }</>
    </>
    return (
        <div className="navbar bg-base-100 h-28 mb-4">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {navItems}
      </ul>
    </div>
    
        <img className="w-28 h-20 vh-0 0 24 24" src="https://i.ibb.co/ZmD9XNX/pngtree-toy-shop-line-icon-vector-png-image-4675883.png" alt="" />
        <p className="text-l sm:text-3xl md:text-4xl lg:text-4xl font-bold">ToyWarriors</p>
    
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItems}
    </ul>
  </div>
  <div className="navbar-end">
  <div>
            {/* { user ?
            <div className="flex">
                <Link>
           <button>Logout</button>
           </Link> <img style={{width:'40px'}} src={user.photoURL} title={user.displayName} />
            </div>: 
           <Link to="/login">
           <button>Login</button>
           </Link>
           } */}
           </div>
  </div>
</div>
    );
};

export default NavBar;