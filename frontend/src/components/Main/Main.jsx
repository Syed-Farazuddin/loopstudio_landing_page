import img from "../../assets/image-interactive.jpg";
export default function Main() {
  return (
    <div className="max-w-6xl mx-auto px-10 py-8 mt-20 ">
      <div className="md:relative">
        <img src={img} alt="" />
        <div className="md:absolute bg-white md:w-[40%] bottom-0 right-20 sm:p-10">
          <h1 className="text-4xl text-center xsm:text-2xl">
            THE LEADER IN INTERACTIVE VR{" "}
          </h1>
          <p className="text-center mt-3">
            Founded in 2011,Loopstudios has been producting world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed business through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </div>
  );
}
