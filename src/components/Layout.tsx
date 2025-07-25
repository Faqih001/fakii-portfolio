import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import FloatingButtons from "./FloatingButtons";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Layout;