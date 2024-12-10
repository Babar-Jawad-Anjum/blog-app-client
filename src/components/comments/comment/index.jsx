import Image from "../../image";
const Comment = () => {
  return (
    <div className="p-3 bg-slate-50 rounded-xl">
      <div className="flex items-center gap-4">
        <Image
          src="userImg.jpeg"
          className="w-10 h-10 rounded-full object-cover"
          width="40"
        />
        <span className="font-medium text-sm">John Doe</span>
        <span className="text-xs text-gray-500">2 days ago</span>
      </div>
      <div className="mt-4 text-sm">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
          corrupti dolorum nisi ullam quis sunt odit placeat vel labore! Harum
          sit molestiae animi doloribus reiciendis.
        </p>
      </div>
    </div>
  );
};

export default Comment;
