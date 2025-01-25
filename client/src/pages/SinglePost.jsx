import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { format } from "timeago.js";
import Image from "../components/Image";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";
import { API_URL } from "../api/api";

const SinglePost = () => {
  const { slug } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["post", slug],
    queryFn: async () => {
      const res = await axios.get(`${API_URL}/posts/${slug}`);
      return res.data;
    },
  });

  if (isPending) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  if (!data) return "Post not found";

  return (
    <div className="my-5 flex flex-col gap-7">
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            {data?.title}
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link to="" className="text-blue-800">
              {data?.user?.username}
            </Link>
            <span>on</span>
            <Link to="" className="text-blue-800">
              {data?.category}
            </Link>
            <span>{format(data?.createdAt)}</span>
          </div>
          <p className="text-gray-500 font-medium">{data?.desc}</p>
        </div>
        {data?.img && (
          <div className="hidden lg:block w-2/5">
            <Image src={data?.img} className={"rounded-2xl"} w={"600"} />
          </div>
        )}
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p dangerouslySetInnerHTML={{ __html: data?.content }} />
        </div>

        <div className="px-4 h-max sticky top-5">
          <h1 className="mb-3 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-5">
              {data?.user?.img && (
                <Image
                  src={data?.user?.img}
                  className={"w-12 h-12 rounded-full object-cover"}
                  w="48"
                  h="48"
                />
              )}
              <Link to="" className="text-blue-800">
                {data?.user?.username}
              </Link>
            </div>

            <div className="flex gap-2">
              <Link to="">
                <Image src="facebook.svg" />
              </Link>
              <Link to="">
                <Image src="instagram.svg" />
              </Link>
            </div>
          </div>
          <PostMenuActions post={data} />
          <h1 className="mt-6 mb-3 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline">Web Design</Link>
            <Link className="underline">Development</Link>
            <Link className="underline">Databases</Link>
            <Link className="underline">Search Engines</Link>
          </div>
          <h1 className="mt-7 mb-3 text-sm font-medium">Search </h1>
          <Search />
        </div>
      </div>
      <Comments postId={data?._id} />
    </div>
  );
};
export default SinglePost;
