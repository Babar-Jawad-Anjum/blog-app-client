import { Link } from "react-router-dom";
import Image from "../image";

const FeaturedPosts = () => {
  return (
    <div className="mt-6 flex flex-col lg:flex-row gap-8">
      {/* First */}
      <div className="w-full lg:w-1/2 flex flex-col gap-3">
        {/* Image */}
        <Image src="featured1.jpeg" className="rounded-2xl object-cover" />
        {/* details */}
        <div className="flex items-center gap-3 text-sm">
          <h1 className="font-semibold">01.</h1>
          <Link className="text-blue-800">Web Design</Link>
          <span className="text-gray-500">2 days ago</span>
        </div>
        {/* title */}
        <Link to="/test" className="text-lg font-semibold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, odit.
        </Link>
      </div>
      {/* Others */}
      <div className="w-full lg:w-1/2 flex flex-col gap-3">
        {/* second */}
        <div className="lg:h-1/3 flex justify-between gap-3">
          {/* Image */}
          <Image
            src="featured2.jpeg"
            className="rounded-2xl object-cover w-1/3 aspect-video"
          />
          {/* details & title */}
          <div className="w-2/3">
            <div className="flex items-center gap-3 text-xs lg:text-sm mb-3">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-blue-800">Web Design</Link>
              <span className="text-gray-500 text-xs">4 days ago</span>
            </div>
            {/* title */}
            <Link to="/test" className="text-md 2xl:text-lg font-medium">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil,
              odit.
            </Link>
          </div>
        </div>
        {/* third */}
        <div className="lg:h-1/3 flex justify-between gap-3">
          {/* Image */}
          <Image
            src="featured2.jpeg"
            className="rounded-2xl object-cover w-1/3 aspect-video"
          />
          {/* details & title */}
          <div className="w-2/3">
            <div className="flex items-center gap-3 text-xs lg:text-sm mb-3">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-blue-800">Web Design</Link>
              <span className="text-gray-500 text-xs">4 days ago</span>
            </div>
            {/* title */}
            <Link to="/test" className="text-md 2xl:text-lg font-medium">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil,
              odit.
            </Link>
          </div>
        </div>
        {/* fourth */}
        <div className="lg:h-1/3 flex justify-between gap-3">
          {/* Image */}
          <Image
            src="featured2.jpeg"
            className="rounded-2xl object-cover w-1/3 aspect-video"
          />
          {/* details & title */}
          <div className="w-2/3">
            <div className="flex items-center gap-3 text-xs lg:text-sm mb-3">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-blue-800">Web Design</Link>
              <span className="text-gray-500 text-xs">4 days ago</span>
            </div>
            {/* title */}
            <Link to="/test" className="text-md 2xl:text-lg font-medium">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil,
              odit.
            </Link>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default FeaturedPosts;
