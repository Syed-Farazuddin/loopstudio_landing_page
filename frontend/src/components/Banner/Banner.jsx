import Img from "../../assets/image-hero.jpg";
import Header from "../Header/Header";
export default function Banner() {
  return (
    <div className="relative top-0 left-0 right-0 z-0">
      <div className="">
        <img className="h-[500px] w-full relative" src={Img} alt="" />
        <div className="absolute top-0  left-0 right-0">
          <Header />
        </div>
        <p className="absolute text-4xl left-10 bottom-24 text-slate-100 w-[28%] leading-28 border-2 border-slate-200 p-8 max-w-7xl mx-auto">
          IMMERSIVE EXPERIENCES THAT DELIVER
        </p>
      </div>
    </div>
  );
}
