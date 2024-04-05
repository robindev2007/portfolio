import Header from "@/components/Header/Header";
import React, { ReactNode } from "react";

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />

      {children}
    </div>
  );
}

export default MainLayout;
