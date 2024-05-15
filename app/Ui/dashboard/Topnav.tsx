import Search from "./searchbar";
export default function Topnav() {
  return (
    <div className="relative flex justify-center">
      <div className=" container flex fixed w-11/12 flex-col justify-center rounded-b-2xl bg-sky-600">
        <div className="mb-3  p-3 text-center text-3xl">
          <h1>Main Futsal gass</h1>
        </div>
        <div>
          <Search />
        </div>
      </div>
    </div>
  );
}
