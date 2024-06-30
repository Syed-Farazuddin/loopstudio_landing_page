import Img from "../../assets/image-hero.jpg";
import mbImg from "../../assets/mobile/image-hero.jpg";
import Header from "../Header/Header";
export default function Banner() {
  return (
    <div className="relative top-0 left-0 right-0 z-0">
      <div className="">
        <img
          className="h-[500px] w-full relative md:block xsm:hidden"
          src={Img}
          alt=""
        />
        <img
          className="h-[500px] w-full relative md:hidden"
          src={mbImg}
          alt=""
        />

        <div className="absolute top-0  left-0 right-0">
          <Header />
        </div>
        <div className="absolute left-[6%] right-[6%] sm:left-[5%] bottom-[25%] text-slate-100 sm:w-[40%] md:w-[28%] leading-28 border-2 border-slate-200 p-4 sm:p-8">
          <p className="max-w-6xl mx-auto sm:text-4xl xsm:text-3xl">
            IMMERSIVE EXPERIENCES THAT DELIVER
          </p>
        </div>
      </div>
    </div>
  );
}
