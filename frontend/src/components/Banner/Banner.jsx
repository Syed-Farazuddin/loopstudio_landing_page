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
        <div className="absolute left-20 bottom-28 text-4xl text-slate-100 w-[28%] leading-28 border-2 border-slate-200 p-8">
          <p className="max-w-6xl mx-auto">
            IMMERSIVE EXPERIENCES THAT DELIVER
          </p>
        </div>
      </div>
    </div>
  );
}
