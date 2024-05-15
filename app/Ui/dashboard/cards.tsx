import badminton from "@/public/badminton.jpg";
import badmintonBlok from "@/public/badminton-blok.jpg";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/outline";

export default async function Cards() {
  return (
    <>
      <div
        className=" container mx-auto  mb-6   w-11/12 overscroll-contain rounded-xl bg-white p-5 shadow-md md:w-4/5 "
        id="item-detail-modal"
      >
        <Card />
      </div>
    </>
  );
}

export function Card() {
  const Staricon = StarIcon;
  return (
    <div className="flex flex-col  flex-nowrap border md:flex-row ">
      <div className=" flex justify-center border md:mr-8">
        <Image
          src={badminton}
          alt="badminton"
          className=" hidden h-40 w-40 md:block"
        />
        <Image
          src={badmintonBlok}
          alt="badminton"
          className=" block md:hidden"
        />
      </div>
      <div className=" border p-2 leading-8">
        <h3 className="text-xl font-bold ">Product 1</h3>
        <p className="text-slate-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident,
        </p>
        <span className="flex w-20 border">
          <Staricon className="" />
          <Staricon />
          <Staricon />
          <Staricon />
          <Staricon />
        </span>
        <div className="font-bold text-blue-400">
          IDR 30K <span className="font-normal text-slate-400">/Jam</span>
        </div>
      </div>
    </div>
  );
}
