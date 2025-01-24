import { format } from "timeago.js";
import Image from "./Image";

const Comment = ({ comment }) => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        {comment?.user.img ? (
          <Image
            src={comment?.user.img}
            className={"w-10 h-10 rounded-full object-cover"}
            w={"40"}
          />
        ) : (
          <img
            src={`https://ui-avatars.com/api/?background=random&size=36&rounded=true&name=${comment?.user.username}`}
            alt={comment?.user.username}
          />
        )}
        <span className="font-medium -ml-2">{comment?.user.username}</span>
        <span className="text-sm text-gray-500">
          {format(comment?.createdAt)}
        </span>
      </div>
      <div className="mt-4">
        <p>{comment?.desc}</p>
      </div>
    </div>
  );
};
export default Comment;
