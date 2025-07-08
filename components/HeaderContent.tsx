import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface HeaderContentProps {
  children: React.ReactNode;
}

function HeaderContent({ children }: HeaderContentProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default HeaderContent;