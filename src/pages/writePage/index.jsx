import { useUser } from "@clerk/clerk-react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

const WritePage = () => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) return <div>Loading...</div>;
  // if (isLoaded && !isSignedIn) return <div>You should login.</div>;

  return (
    <div className="h-[calc(100vh-64px)] flex flex-col gap-3">
      <h1 className="text-lg font-light">Create a New Post</h1>
      <form className="flex flex-col gap-5 flex-1 mb-4">
        <button className="shadow-md p-2 rounded-lg text-xs text-gray-500 bg-white w-max">
          Add a cover image
        </button>
        <input
          type="text"
          placeholder="My Awesome Story"
          className="text-lg font-semibold bg-transparent outline-none"
        />
        <div className="flex items-center gap-4">
          <label htmlFor="" className="text-sm">
            Choose a category
          </label>
          <select
            name="cat"
            id=""
            className="p-2 rounded-lg bg-white shadow-md text-xs"
          >
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea
          name="desc"
          placeholder="A Short Description"
          className="p-3 rounded-lg bg-white shadow-md text-sm"
        ></textarea>
        <ReactQuill
          theme="snow"
          className="flex-1 rounded-xl bg-white shadow-md"
        />
        <button className="bg-blue-800 text-white font-medium rounded-lg mt-3 p-2 w-36">
          Send
        </button>
      </form>
    </div>
  );
};

export default WritePage;
