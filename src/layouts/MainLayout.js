import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Header from "../shared/Header/Header";

const MainLayout = () => {
  return (
    <div>
      <header className="pb-5">
        <Header></Header>
      </header>
      <main>
        <Outlet></Outlet>
      </main>

      <footer className="pt-5">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
