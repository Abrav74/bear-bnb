import { NAVBAR_HEIGHT } from "@/lib/constants";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* <Navbar /> */}
      NAVBAR
      <main className={`h-full w-full flex flex-col pt-[${NAVBAR_HEIGHT}px]`}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
