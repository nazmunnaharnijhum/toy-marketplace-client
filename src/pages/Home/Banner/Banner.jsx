
const Banner = () => {
    return (
        <div className="carousel w-full h-[700px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/LY83YKB/dr-strange-gafbe2c0c2-1920.jpg" className="w-full rounded-xl" />
    <div className="absolute h-full flex items-center left-0 right-5 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
      <div className="text-yellow-50 space-y-5 pl-24 w-1/2">
        <h2 className="text-6xl font-bold text-yellow-50">Best Kids Store <br /> & Online Shop</h2>
        <p className="text-3xl text-yellow-50 font-bold">Give The Gift Of Your Children Everyday</p>
        <button className="btn btn-outline btn-accent">Shop Now</button>
      </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/vX7sYN5/action-figures-g9b3d82466-1920.jpg" className="w-full rounded-xl" />

    <div className="absolute h-full flex items-center left-0 right-5 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
      <div className="text-yellow-50 space-y-5 pl-24 w-1/2">
        <h2 className="text-6xl font-bold text-yellow-50">Best Kids Store <br /> & Online Shop</h2>
        <p className="text-3xl text-yellow-50 font-bold">Give The Gift Of Your Children Everyday</p>
        <button className="btn btn-outline btn-accent">Shop Now</button>
      </div>
    </div>

    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/L5y5J0w/transformers-g86cf36c71-1920.jpg" className="w-full rounded-xl" />
    <div className="absolute h-full flex items-center left-0 right-5 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
      <div className="text-yellow-50 space-y-5 pl-24 w-1/2">
        <h2 className="text-6xl font-bold text-yellow-50">Best Kids Store <br /> & Online Shop</h2>
        <p className="text-3xl text-yellow-50 font-bold">Give The Gift Of Your Children Everyday</p>
        <button className="btn btn-outline btn-accent">Shop Now</button>
      </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/YWXf2zj/toy-gf2b7f680f-1920.jpg" className="w-full rounded-xl" />
    <div className="absolute h-full flex items-center left-0 right-5 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
      <div className="text-yellow-50 space-y-5 pl-24 w-1/2">
        <h2 className="text-6xl font-bold text-yellow-50">Best Kids Store <br /> & Online Shop</h2>
        <p className="text-3xl text-yellow-50 font-bold">Give The Gift Of Your Children Everyday</p>
        <button className="btn btn-outline btn-accent">Shop Now</button>
      </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;