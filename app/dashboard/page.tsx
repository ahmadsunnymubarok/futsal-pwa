import Topnav from "../Ui/dashboard/Topnav";
import Cards from "../Ui/dashboard/cards";

export default async function Page() {
  return (
    <main>
      <Topnav />
      <div className="mt-[20%] md:mt-[8%] ">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </main>
  );
}
