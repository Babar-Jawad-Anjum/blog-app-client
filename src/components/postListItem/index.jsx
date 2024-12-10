import React from "react";
import Image from "../image";
import { Link } from "react-router-dom";

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6">
      {/* image */}
      <div className="md:hidden xl:block xl:w-1/3">
        <Image
          src="postImg.jpeg"
          className="rounded-2xl object-cover"
          width="800"
        />
      </div>
      {/* details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/test" className="text-2xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          amet!
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-xs">
          <span>Written by</span>
          <Link className="text-blue-800">John Doe</Link>
          <span>on</span>
          <Link className="text-blue-800">Web Design</Link>
          <span>2 days ago</span>
        </div>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt a
          dolorum ab quo autem. Eligendi, labore deserunt? Aperiam, excepturi
          blanditiis reiciendis nam consequuntur totam aliquid autem eos eaque
          id? Fugiat?
        </p>
        <Link to="/test" className="underline text-blue-800 text-xs">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
