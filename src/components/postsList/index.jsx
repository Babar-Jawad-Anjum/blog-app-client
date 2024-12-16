import { useInfiniteQuery } from "@tanstack/react-query";
import PostListItem from "../postListItem";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

const fetchPosts = async (pageParams) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/posts`, {
    params: { page: pageParams, limit: 2 },
  });
  return res.data;
};

const PostsList = () => {
  const {
    data,
    // error,
    fetchNextPage,
    hasNextPage,
    // isFetching,
    // isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      lastPage.hasMore ? pages.length + 1 : undefined,
  });

  if (status === "loading") return "Loading...";

  if (status === "error") return "Something went wrong";

  const allPosts = data?.pages?.flatMap((page) => page.posts) || [];

  return (
    <InfiniteScroll
      dataLength={allPosts.length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<h4>Loading more posts...</h4>}
      endMessage={
        <p>
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

export default PostsList;
