import { Link } from "react-router-dom";


const ExtraSection2 = () => {
    return (
        <div>
            <p className="text-6xl font-bold text-teal-500 mt-20 mb-6 text-center">About Us</p>
            <div className="card lg:card-side bg-base-100 shadow-xl ">
  <figure><img  src="https://i.ibb.co/qCxwYCG/close-up-happy-kids-playing-with-soap-bubbles.jpg" alt="Album"/></figure>
  <div className="card-body ">
    <h2 className="card-title">New in this store!</h2>
    <p className="font-bold">Welcome to our toy store! We are passionate about providing children with joyful experiences through carefully curated toys. Discover a diverse selection of high-quality toys that inspire imagination, learning, and fun. Shop now for endless play possibilities!</p>
    <p className="font-bold">Without any delay register now for more update</p>
    <div className="card-actions justify-end">
      <Link to="register"><button className="btn btn-accent">Register</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ExtraSection2;