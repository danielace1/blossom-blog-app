import Comment from "./Comment";

const Comments = () => {
  return (
    <div className="space-y-8 lg:w-3/5">
      <div className="flex flex-col gap-6">
        <h1 className="text-xl text-gray-600 font-semibold underline underline-offset-2">
          Comments
        </h1>
        <div className="flex flex-col gap-4 w-full">
          <textarea
            name=""
            id=""
            placeholder="Write a comment..."
            className="outline-none w-full p-4 rounded-lg"
          />
          <div>
            <button className="bg-blue-800 hover:bg-blue-900 py-3 px-4 text-white font-medium rounded-xl">
              Comment
            </button>
          </div>
        </div>
      </div>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};
export default Comments;
