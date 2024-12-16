import axios from "axios";
import Comment from "./comment";
import { useQuery } from "@tanstack/react-query";

const fetchComments = async (postId) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/api/comments/${postId}`
  );

  return res.data;
};

const Comments = ({ postId }) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => fetchComments(postId),
  });

  if (isPending) return "Loading";
  if (error) return "Something went wrong! " + error.message;

  return (
    <div className="flex flex-col gap-8 lg:w-3/5">
      <h1 className="text-lg text-gray-500 underline font-semibold">
        Comments
      </h1>
      <div className="flex items-center justify-between gap-8 w-full">
        <textarea
          placeholder="Write a comment..."
          className="w-full p-2 rounded-xl"
        />
        <button className="bg-blue-800 px-4 py-2 text-white font-medium rounded-lg">
          Send
        </button>
      </div>
      {data.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
