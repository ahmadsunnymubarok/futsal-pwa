import Image from "next/image";

export default function Detail() {
  return (
    <div className=" fixed inset-0 z-10 hidden w-full overflow-x-auto border bg-[#000000b3]">
      <div className=" relative  m-auto mt-[20%] flex h-3/4 w-4/5 flex-col justify-center  rounded-xl bg-blue-600 sm:mt-[20%]  md:mt-[8%] md:w-3/5">
        <h1> Detail Lapangan</h1>
        <div className="border">
          {/* <Image src={dolan} alt="sunny" className="m-auto w-3/4" /> */}
        </div>
        <h1>Agung Futsal kendari</h1>
        <span></span>
        <span></span>
        <div>
          <h1>Lokasi</h1>
          <p></p>
        </div>
        <div>
          <h1>Fasilitas</h1>
          <span></span>
          <span></span>
        </div>
        <div>
          <h1>Keterangan</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            eligendi voluptates voluptatum alias in aliquid. Eaque accusantium
            vel aliquam vitae dicta doloremque ab suscipit sit.
          </p>
        </div>
        <div>
          <h1>
            Rp. 150.000<span>/Jam</span>
          </h1>
          <button>Booking</button>
        </div>
      </div>
    </div>
  );
}
