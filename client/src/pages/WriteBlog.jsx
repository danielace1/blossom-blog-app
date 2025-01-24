import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useAuth, useUser } from "@clerk/clerk-react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import axios from "axios";
import { toast } from "react-toastify";
import { IoImageOutline } from "react-icons/io5";
import { MdOutlineSmartDisplay } from "react-icons/md";
import { API_URL } from "../api/api";
import Upload from "../components/Upload";

const WriteBlog = () => {
  const { isLoaded, isSignedIn } = useUser();
  const [value, setValue] = useState("");
  const [cover, setCover] = useState("");
  const [img, setImg] = useState("");
  const [video, setVideo] = useState("");
  const [progress, setProgress] = useState(0);
  const { getToken } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    img &&
      setValue(
        (prev) => prev + `<p><img src="${img.url}" alt="${img.name}" /></p>`
      );
  }, [img, cover]);

  useEffect(() => {
    video &&
      setValue(
        (prev) =>
          prev +
          `<p><iframe class="ql-video" src="${video.url}" alt="${video.name}" /></p>`
      );
  }, [video]);

  const mutation = useMutation({
    mutationFn: async (data) => {
      const token = await getToken();
      return axios.post(`${API_URL}/posts/writeblog`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
    },
    onSuccess: (res) => {
      console.log(res);

      toast.success("Post created successfully");
      navigate(`/${res.data.post.slug}`);
    },
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  if (isLoaded && !isSignedIn) {
    return <div>You should Login!</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      img: cover.filePath || "",
      title: formData.get("title"),
      category: formData.get("category"),
      desc: formData.get("desc"),
      content: value,
    };

    console.log(data);

    mutation.mutate(data);
  };

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="text-xl font-semibold">Create a New Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1 mb-6">
        <Upload type={"image"} setData={setCover} setProgress={setProgress}>
          <button
            type="button"
            className="w-max py-2 px-3 shadow-md rounded-xl text-sm text-gray-500 bg-white"
          >
            Add a cover image
          </button>
        </Upload>
        <input
          type="text"
          name="title"
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
        <div className="flex flex-1">
          <div className="mt-2 flex flex-col gap-2 mr-2">
            <Upload type={"image"} setData={setImg} setProgress={setProgress}>
              <IoImageOutline className="cursor-pointer text-2xl text-gray-900 hover:text-gray-950" />
            </Upload>
            <Upload type={"video"} setData={setVideo} setProgress={setProgress}>
              <MdOutlineSmartDisplay className="cursor-pointer text-2xl text-gray-900 hover:text-gray-950" />
            </Upload>
          </div>
          <ReactQuill
            theme="snow"
            placeholder="Write your blog post..."
            className="flex-1 rounded-xl bg-white shadow-md"
            value={value}
            onChange={setValue}
            readOnly={0 < progress && progress < 100}
          />
        </div>
        <button
          disabled={mutation.isPending || (0 < progress && progress < 100)}
          className="bg-blue-800 hover:bg-blue-900 text-white font-medium rounded-xl p-2 w-32 disabled:bg-blue-500 disabled:cursor-not-allowed"
        >
          {mutation.isPending ? "Loading..." : "Publish"}
        </button>

        <span
          className={`text-gray-800 font-semibold text-sm ${
            progress ? "" : "hidden"
          }`}
        >
          {"Progress : " + progress + "%"}
        </span>
        {mutation.isError && (
          <span className="text-red-500 text-sm">{mutation.error.message}</span>
        )}
      </form>
    </div>
  );
};
export default WriteBlog;
