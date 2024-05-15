import NavLinks from "./navlinks";

export default function BottomNav() {
  return (
    <div className=" fixed inset-x-0 bottom-0   mx-auto  flex w-11/12 justify-center rounded-t-lg bg-sky-600 p-1 md:w-4/5">
      <div className=" flex  ">
        <NavLinks />
      </div>
    </div>
  );
}
