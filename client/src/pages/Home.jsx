import { Link } from "react-router-dom";
import { LuDot } from "react-icons/lu";
import MainCategories from "../components/MainCategories";
import FeaturedPosts from "../components/FeaturedPosts";
import PostList from "../components/PostList";

const Home = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* BREADCRUMB */}
      <div className="flex items-center gap-x-2">
        <Link to="/login">Home</Link>
        <LuDot className="text-lg" />
        <span className="text-blue-500">Blogs and Articles</span>
      </div>
      {/* INTRODUCTION */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-800 text-2xl md:text-4xl lg:text-5xl font-bold">
            Welcome to Blossom Blog! 🌼
          </h1>
          <p className="mt-3 md:mt-5 md:text-xl">
            Discover a world of stories and ideas, perfect for inspiration,
            entertainment, or relaxation. Dive into our latest articles and
            creative projects today!
          </p>
        </div>
        {/* animated button */}
        <Link to="/writeblog" className="hidden md:block relative">
          <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            className="text-lg tracking-widest animate-spin animatedButton"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Write your story •
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Share your idea •
              </textPath>
            </text>
          </svg>
          <button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </button>
        </Link>
      </div>
      {/* CATEGORIES */}
      <MainCategories />
      {/* FEATURED POSTS */}
      <div>
        <h1 className="my-2 text-3xl text-gray-600 font-semibold">
          Featured Posts
        </h1>
      </div>
      <FeaturedPosts />
      {/* POST LIST */}
      <div>
        <h1 className="my-8 text-3xl text-gray-600 font-semibold">
          Recent Posts
        </h1>
        <PostList />
      </div>
    </div>
  );
};
export default Home;
