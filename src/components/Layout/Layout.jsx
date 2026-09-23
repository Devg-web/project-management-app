import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import classes from "./Layout.module.css";
import { Outlet } from "react-router-dom";

function Layout({ children }) {
  return (
    <>
     <Navbar />

      <div className={classes.container}>
        <Sidebar />

        <main >
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;