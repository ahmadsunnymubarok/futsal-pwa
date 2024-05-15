import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";

export default function Search() {
  const SearchIcon = MagnifyingGlassCircleIcon;
  return (
    <div className="mb-3 flex justify-center">
      <div className="  flex w-11/12 rounded-lg  bg-white md:w-4/5">
        <input
          type="text"
          placeholder="Search.."
          name="search"
          className=" w-full rounded-lg border-none "
        />
        <SearchIcon className="hover:text-blue w-9" />
      </div>
    </div>
  );
}
