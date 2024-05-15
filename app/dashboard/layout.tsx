import BottomNav from "../Ui/dashboard/bottomNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <div className="relative">
        <BottomNav />
      </div>
      <div className="">{children}</div>
    </div>
  );
}
