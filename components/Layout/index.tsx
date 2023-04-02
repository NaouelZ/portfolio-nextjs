import SideBar from "../Sidebar";
import Menu from "../Menu";

type LayoutProps = {
    children: React.ReactNode,
  };
  
  export default function Layout({ children }: LayoutProps) {
    return (
    <div className='container grid grid-cols-12 gap-3 mx-auto lg:my-10'>
        <div className="col-span-12 text-center lg:col-span-4">
          <SideBar />
        </div>
        <div className="w-full col-span-12 pt-5 lg:col-span-8">
          <Menu />
          <div className="mt-8 bg-white rounded-xl">
            {children}
          </div>
        </div>
    </div>
    );
  }