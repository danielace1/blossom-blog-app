import { useAuth, useUser } from "@clerk/clerk-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import axios from "axios";
import Comment from "./Comment";
import { API_URL } from "../api/api";
import { useState } from "react";

const Comments = ({ postId }) => {
  const [comments, setComments] = useState("");
  const { user } = useUser();
  const { getToken } = useAuth();
  const queryClient = useQueryClient();

  const { isPending, error, data } = useQuery({
    queryKey: ["comments", postId],
    queryFn: async () => {
      const res = await axios.get(`${API_URL}/comments/${postId}`);
      return res.data;
    },
  });

  const mutation = useMutation({
    mutationFn: async (newComment) => {
      const token = await getToken();
      return axios.post(`${API_URL}/comments/${postId}`, newComment, {
        headers: { Authorization: `Bearer ${token}` },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
      // toast.success("Comment has been created.");
    },

    onError: (error) => {
      toast.error("An error occurred: " + error.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      desc: formData.get("desc"),
    };

    mutation.mutate(data);
    setComments("");
  };

  return (
    <div className="space-y-8 lg:w-3/5">
      <div className="flex flex-col gap-6">
        <h1 className="text-xl text-gray-600 font-semibold underline underline-offset-2">
          Comments
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            name="desc"
            id="desc"
            placeholder="Write a comment..."
            className="outline-none w-full p-4 rounded-lg"
            required
          />
          <div>
            <button className="bg-blue-800 hover:bg-blue-900 py-2.5 px-3.5 text-white font-medium rounded-xl">
              Comment
            </button>
          </div>
        </form>
      </div>
      {isPending ? (
        "Loading..."
      ) : error ? (
        "Error Loading Comments!"
      ) : (
        <>
          {mutation.isPending && (
            <Comment
              comment={{
                desc: `${mutation.variables.desc} (Commenting...)`,
                createdAt: new Date(),
                user: {
                  img: user.imageUrl,
                  username: user.username,
                },
              }}
            />
          )}
          {data?.map((comment) => (
            <Comment key={comment._id} comment={comment} />
          ))}
        </>
      )}
    </div>
  );
};
export default Comments;
