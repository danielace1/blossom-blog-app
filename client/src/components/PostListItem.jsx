import { Link } from "react-router-dom";
import { format } from "timeago.js";
import Image from "../components/Image";

const PostListItem = ({ post }) => {
  return (
    <div className="flex flex-col xl:flex-row gap-4 md:gap-8">
      {post?.img && (
        <div className="md:hidden xl:block xl:w-1/3">
          <Image
            src={post?.img}
            className={"rounded-2xl object-cover h-[50vh]"}
            w={"743"}
          />
        </div>
      )}
      <div
        className={`mt-1 flex flex-col gap-3 ${
          post?.img ? "xl:w-2/3" : "md:w-full"
        }`}
      >
        <Link
          to={`/${post?.slug}`}
          className="text-2xl md:text-3xl font-semibold"
        >
          {post?.title}
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link
            to={`/posts/?author=${post?.user?.username}`}
            className="text-blue-500"
          >
            {post?.user?.username}
          </Link>
          <span>on</span>
          <Link
            to={`/posts/?category=${post?.category}`}
            className="text-blue-500"
          >
            {post?.category}
          </Link>
          <span>{format(post?.createdAt)}</span>
        </div>
        <p>{post?.desc}</p>
        <Link to={`/${post?.slug}`} className="text-blue-800 text-sm underline">
          Read More
        </Link>
      </div>
    </div>
  );
};
export default PostListItem;
