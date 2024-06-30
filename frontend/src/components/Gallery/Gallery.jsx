// Desktop images
import img1 from "../../assets/image-deep-earth.jpg";
import img2 from "../../assets/image-night-arcade.jpg";
import img3 from "../../assets/image-soccer-team.jpg";
import img4 from "../../assets/image-grid.jpg";
import img5 from "../../assets/image-from-above.jpg";
import img6 from "../../assets/image-pocket-borealis.jpg";
import img7 from "../../assets/image-curiosity.jpg";
import img8 from "../../assets/image-fisheye.jpg";
// Mobile images
import mbImg1 from "../../assets/mobile/image-deep-earth.jpg";
import mbImg2 from "../../assets/mobile/image-night-arcade.jpg";
import mbImg3 from "../../assets/mobile/image-soccer-team.jpg";
import mbImg4 from "../../assets/mobile/image-grid.jpg";
import mbImg5 from "../../assets/mobile/image-from-above.jpg";
import mbImg6 from "../../assets/mobile/image-pocket-borealis.jpg";
import mbImg7 from "../../assets/mobile/image-curiosity.jpg";
import mbImg8 from "../../assets/mobile/image-fisheye.jpg";

export default function Gallery() {
  const mbImages = [
    { image: mbImg1, title: "DEEP EARTH" },
    { image: mbImg2, title: "NIGHT ARCADE" },
    { image: mbImg3, title: "SOCCER TEAM VR" },
    { image: mbImg4, title: "THE GRID" },
    { image: mbImg5, title: "FROM UP ABOVE VR" },
    { image: mbImg6, title: "POCKET BOREALIS" },
    { image: mbImg7, title: "THE CURIOSITY" },
    { image: mbImg8, title: "MAKE IT FISH EYE" },
  ];
  const images = [
    { image: img1, title: "DEEP EARTH" },
    { image: img2, title: "NIGHT ARCADE" },
    { image: img3, title: "SOCCER TEAM VR" },
    { image: img4, title: "THE GRID" },
    { image: img5, title: "FROM UP ABOVE VR" },
    { image: img6, title: "POCKET BOREALIS" },
    { image: img7, title: "THE CURIOSITY" },
    { image: img8, title: "MAKE IT FISH EYE" },
  ];
  return (
    <section className="max-w-6xl mx-auto my-10">
      <div className="flex md:justify-between my-8 items-center xsm:justify-center">
        <h2 className="md:text-3xl xmd:text-center xsm:text-2xl">
          OUR CREATIONS
        </h2>
        <button className="md:block xsm:hidden hover:bg-black px-4 py-2 border border-slate-900 hover:text-white cursor-pointer">
          SEE ALL
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 xsm:hidden md:grid">
        {/* IMAGE SECTION */}

        {images.map((item, idx) => {
          return (
            <div key={idx} className="relative">
              <img src={item.image} alt="" />
              <p className="absolute bottom-8 text-slate-200 text-4xl w-[70%] left-5">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-4 gap-10  md:hidden px-10">
        {/* IMAGE SECTION */}

        {mbImages.map((item, idx) => {
          return (
            <div key={idx} className="relative">
              <img src={item.image} alt="" />
              <p className="absolute bottom-8 text-slate-200 text-2xl w-[70%] left-5">
                {item.title}
              </p>
            </div>
          );
        })}
        <button className="hover:bg-black md:hidden px-2 py-1 mt-2 border border-slate-900 hover:text-white cursor-pointer w-[50%] mx-auto">
          SEE ALL
        </button>
      </div>
    </section>
  );
}
