import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
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
          to="/posts?category=web-design"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Development
        </Link>
        <Link
          to="/posts?category=web-design"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Databases
        </Link>
        <Link
          to="/posts?category=web-design"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Search Engines
        </Link>
      </div>
      <span className="text-black font-semibold">|</span>
      {/* search */}
      <div className="relative">
        <IoSearch className="absolute bottom-3 left-3" />
        <input
          type="text"
          placeholder="Search a post..."
          className="bg-gray-100 px-8 py-2 rounded-full outline-none"
        />
      </div>
    </div>
  );
};
export default MainCategories;
