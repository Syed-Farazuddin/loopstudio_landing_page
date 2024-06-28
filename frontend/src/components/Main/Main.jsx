import img from "../../assets/image-interactive.jpg";
export default function Main() {
  return (
    <div className="max-w-6xl mx-auto px-10 py-8 mt-20">
      <div className="relative">
        <img src={img} alt="" />
        <div className="absolute bg-white w-[40%] bottom-0 right-20 p-10">
          <h1 className="text-4xl">THE LEADER IN INTERACTIVE VR </h1>
          <p>
            Founded in 2011,Loopstudios has been producting world-class virtual
            reality projects for some of the best companies aroudn the globe.
            Our award-winning creations have transformed business through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </div>
  );
}
