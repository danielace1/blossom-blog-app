import { Link } from "react-router-dom";
import Search from "./Search";
const MainCategories = () => {
  return (
    <div className="hidden md:flex bg-white rounded-full xl:rounded-full p-3 lg:p-4 shadow-lg items-center justify-center gap-8">
      {/* links */}
      <div className="flex-1 flex justify-center lg:justify-between items-center flex-wrap">
        <Link
          to="/posts"
          className="bg-blue-800 text-white rounded-full px-4 py-2"
        >
          All Posts
        </Link>
        <Link
          to="/posts?category=web-design"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Web Design
        </Link>
        <Link
          to="/posts?category=development"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Development
        </Link>
        <Link
          to="/posts?category=databases"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Databases
        </Link>
        <Link
          to="/posts?category=seo"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Search Engines
        </Link>
      </div>
      <span className="text-black font-semibold">|</span>
      {/* search */}
      <Search />
    </div>
  );
};
export default MainCategories;
