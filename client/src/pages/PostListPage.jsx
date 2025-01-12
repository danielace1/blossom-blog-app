import { useState } from "react";
import PostList from "../components/PostList";
import SideMenu from "../components/SIdeMenu";

const PostListPage = () => {
  const [open, setOpen] = useState();

  return (
    <div>
      <h1 className="mb-5 text-2xl">Development Blog</h1>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="md:hidden bg-blue-800 text-sm text-white px-4 py-2 mb-4 rounded-2xl"
      >
        {open ? "Close" : "Filter or Search"}
      </button>
      <div className="flex flex-col-reverse md:flex-row gap-8">
        <div>
          <PostList />
        </div>
        <div className={`${open ? "block" : "hidden"} md:block`}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
};
export default PostListPage;
