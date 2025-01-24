import { useAuth, useUser } from "@clerk/clerk-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { format } from "timeago.js";
import { toast } from "react-toastify";
import axios from "axios";
import Image from "./Image";
import { API_URL } from "../api/api";

const Comment = ({ comment, postId }) => {
  const { user } = useUser();

  const { getToken } = useAuth();

  const isAdmin = user?.publicMetadata?.role === "admin" || false;

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();
      return axios.delete(`${API_URL}/comments/${comment._id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
      toast.success("Comment has been deleted.");
    },

    onError: (error) => {
      toast.error("An error occurred: " + error.message);
    },
  });

  const handledelete = () => {
    mutation.mutate();
  };

  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        {comment?.user?.img ? (
          <Image
            src={comment?.user?.img}
            className={"w-10 h-10 rounded-full object-cover"}
            w={"40"}
          />
        ) : (
          <img
            src={`https://ui-avatars.com/api/?background=random&size=36&rounded=true&name=${comment?.user?.username}`}
            alt={comment?.user?.username}
          />
        )}
        <span className="font-medium -ml-2">{comment?.user?.username}</span>
        <span className="text-sm text-gray-500">
          {format(comment?.createdAt)}
        </span>
        {user && (comment?.user?.username === user.username || isAdmin) && (
          <span
            className="text-xs text-red-500 hover:text-red-600 cursor-pointer"
            onClick={handledelete}
          >
            delete
            {mutation.isPending && <span>(in progress)</span>}
          </span>
        )}
        <span></span>
      </div>
      <div className="mt-4">
        <p>{comment?.desc}</p>
      </div>
    </div>
  );
};
export default Comment;
