import img7 from "../../assets/image-curiosity.jpg";
import img1 from "../../assets/image-deep-earth.jpg";
import img8 from "../../assets/image-fisheye.jpg";
import img5 from "../../assets/image-from-above.jpg";
import img4 from "../../assets/image-grid.jpg";
import img3 from "../../assets/image-soccer-team.jpg";
import img2 from "../../assets/image-night-arcade.jpg";
import img6 from "../../assets/image-pocket-borealis.jpg";

export default function Gallery() {
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
      <div className="flex justify-between my-8 items-center">
        <h2 className="text-3xl">OUR CREATIONS</h2>
        <button className="hover:bg-black px-4 py-2 border border-slate-900 hover:text-white cursor-pointer">
          SEE ALL
        </button>
      </div>
      <div className="grid grid-cols-4 gap-10">
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
    </section>
  );
}
