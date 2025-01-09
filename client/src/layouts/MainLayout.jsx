import { Outlet } from "react-router-dom";
import TheNavbar from "../components/TheNavbar";

const MainLayout = () => {
  return (
    <div className="px-3 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <TheNavbar />
      <Outlet />
    </div>
  );
};
export default MainLayout;
