import PostListItem from "./PostListItem";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { API_URL } from "../api/api";

const PostList = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: async ({ pageParam = 1 }) => {
      const res = await axios.get(`${API_URL}/posts`, {
        params: { page: pageParam, limit: 5 },
      });

      return res.data;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      lastPage.hasMore ? pages.length + 1 : undefined,
  });

  if (status === "loading") return <div>Loading...</div>;

  if (status === "error") return <div>Error: {error.message}</div>;

  const allPosts = data?.pages?.flatMap((page) => page.posts) || [];

  console.log(allPosts);

  return (
    <InfiniteScroll
      className="space-y-8"
      dataLength={allPosts.length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={
        <h4 className="text-sm text-center font-normal text-gray-500">
          Loading more posts...
        </h4>
      }
      endMessage={
        <p className="text-sm text-center font-normal text-gray-500 mt-3">
          <b>All posts loaded!</b>
        </p>
      }
    >
      {allPosts.map((post) => (
        <PostListItem key={post._id} post={post} />
      ))}
    </InfiniteScroll>
  );
};
export default PostList;
