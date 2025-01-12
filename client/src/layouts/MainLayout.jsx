import { Outlet } from "react-router-dom";
import TheNavbar from "../components/TheNavbar";

const MainLayout = () => {
  return (
    <div className="px-3 md:px-8 lg:px-16 xl:px-32">
      <div className="container 2xl:mx-auto">
        <TheNavbar />
        <Outlet />
      </div>
    </div>
  );
};
export default MainLayout;
