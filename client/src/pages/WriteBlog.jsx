import { useUser } from "@clerk/clerk-react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

const WriteBlog = () => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  if (isLoaded && !isSignedIn) {
    return <div>You should Login!</div>;
  }

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="text-xl font-semibold">Create a New Post</h1>
      <form className="flex flex-col gap-6 flex-1 mb-6">
        <button className="w-max py-2 px-3 shadow-md rounded-xl text-sm text-gray-500 bg-white">
          Add a cover image
        </button>
        <input
          type="text"
          placeholder="My Awesome Story"
          className="text-4xl font-semibold bg-transparent outline-none border border-blue-200 focus:border-blue-300 rounded-xl px-4 py-2"
        />
        <div className="flex items-center gap-4">
          <label htmlFor="" className="">
            Choose a category :
          </label>
          <select
            name="category"
            id=""
            className="outline-none px-3 py-2 rounded-xl bg-white shadow-md focus:border focus:border-gray-400 hover:cursor-pointer"
          >
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="search-engines">Search Engines</option>
          </select>
        </div>

        <textarea
          name="desc"
          id=""
          placeholder="A Short Description"
          className="outline-none p-4 rounded-xl bg-white shadow-md focus:border focus:border-gray-400"
        />
        <ReactQuill
          theme="snow"
          placeholder="Write your blog post..."
          className="flex-1 rounded-xl bg-white shadow-md"
        />
        <button className="bg-blue-800 hover:bg-blue-900 text-white font-medium rounded-xl p-2 w-32">
          Post
        </button>
      </form>
    </div>
  );
};
export default WriteBlog;
