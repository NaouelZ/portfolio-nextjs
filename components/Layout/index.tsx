import SideBar from "../Sidebar";
import Menu from "../Menu";
import useWindowSize from "@/helpers/useWindows";
import { useEffect, useState } from "react";

type LayoutProps = {
    children: React.ReactNode,
  };
  
  export default function Layout({ children }: LayoutProps) {
    const size = useWindowSize();

    return (
    <div className='container grid grid-cols-12 gap-3 mx-auto lg:my-10'>
        {
          size > 1024 &&
        <div className="col-span-12 text-center lg:col-span-4">
          <SideBar />
        </div>
        }
        <div className="w-full col-span-12 pt-5 md:ml-5 lg:col-span-8">
          <Menu />
          <div className="md:mt-8 bg-white mb-[180px] rounded-xl">
            {children}
          </div>
        </div>
    </div>
    );
  }