import { format } from "timeago.js";
const Comment = ({ comment }) => {
  return (
    <div className="p-3 bg-slate-50 rounded-xl">
      <div className="flex items-center gap-4">
        {comment.user?.img && (
          <img
            src={comment.user?.img}
            className="w-10 h-10 rounded-full object-cover"
          />
        )}
        <span className="font-medium text-sm">{comment.user?.username}</span>
        <span className="text-xs text-gray-500">
          {format(comment.createdAt)}
        </span>
      </div>
      <div className="mt-4 text-sm ml-2">
        <p>{comment.desc}</p>
      </div>
    </div>
  );
};

export default Comment;
