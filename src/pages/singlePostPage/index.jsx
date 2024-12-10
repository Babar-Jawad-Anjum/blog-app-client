import { Link } from "react-router-dom";
import Image from "../../components/image";
import PostMenuActions from "../../components/postMenuActions";
import Search from "../../components/search";
import Comments from "../../components/comments";
const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8 py-4 md:py-10">
      {/* details */}
      <div className="flex gap-8">
        <div className="md:w-3/5 flex flex-col gap-5">
          <h1 className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-semibold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            ipsum?
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">John Doe</Link>
            <span>on</span>
            <Link className="text-blue-800">Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            ipsam vitae itaque accusamus distinctio beatae sit maxime unde,
            error porro, debitis cupiditate culpa nostrum natus, fuga et
            corrupti doloribus dolores ex veritatis tempora voluptatibus. Amet
            commodi perspiciatis fugiat reprehenderit minima ullam asperiores
            nobis non ipsam obcaecati, officia ut harum sapiente.
          </p>
        </div>
        <div className="hidden md:block w-2/5">
          <Image src="postImg.jpeg" width="600" className="rounded-2xl" />
        </div>
      </div>
      {/* content */}
      <div className="flex flex-xol md:flex-row gap-7">
        {/* text */}
        <div className="lg:text-md flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
            suscipit expedita aliquam quasi in corporis asperiores possimus
            repellat assumenda reiciendis, error similique aperiam adipisci
            maxime explicabo. Quo doloremque in vero quae suscipit quis
            exercitationem quia corrupti ducimus, earum fugiat et numquam maxime
            voluptatibus saepe eveniet? Aliquid consequuntur harum dolorum
            natus? Facilis expedita debitis ipsa deleniti voluptatem veniam
            quisquam dolorem fugiat distinctio aliquam doloribus incidunt a,
            necessitatibus cupiditate repudiandae soluta quos consequatur eos
            aperiam fuga! Aliquid expedita soluta corporis assumenda sunt,
            veniam in doloribus aliquam sequi nemo, esse ducimus doloremque!
            Suscipit nesciunt perspiciatis atque hic aliquam vel, iste aliquid
            provident praesentium?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
            suscipit expedita aliquam quasi in corporis asperiores possimus
            repellat assumenda reiciendis, error similique aperiam adipisci
            maxime explicabo. Quo doloremque in vero quae suscipit quis
            exercitationem quia corrupti ducimus, earum fugiat et numquam maxime
            voluptatibus saepe eveniet? Aliquid consequuntur harum dolorum
            natus? Facilis expedita debitis ipsa deleniti voluptatem veniam
            quisquam dolorem fugiat distinctio aliquam doloribus incidunt a,
            necessitatibus cupiditate repudiandae soluta quos consequatur eos
            aperiam fuga! Aliquid expedita soluta corporis assumenda sunt,
            veniam in doloribus aliquam sequi nemo, esse ducimus doloremque!
            Suscipit nesciunt perspiciatis atque hic aliquam vel, iste aliquid
            provident praesentium?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
            suscipit expedita aliquam quasi in corporis asperiores possimus
            repellat assumenda reiciendis, error similique aperiam adipisci
            maxime explicabo. Quo doloremque in vero quae suscipit quis
            exercitationem quia corrupti ducimus, earum fugiat et numquam maxime
            voluptatibus saepe eveniet? Aliquid consequuntur harum dolorum
            natus? Facilis expedita debitis ipsa deleniti voluptatem veniam
            quisquam dolorem fugiat distinctio aliquam doloribus incidunt a,
            necessitatibus cupiditate repudiandae soluta quos consequatur eos
            aperiam fuga! Aliquid expedita soluta corporis assumenda sunt,
            veniam in doloribus aliquam sequi nemo, esse ducimus doloremque!
            Suscipit nesciunt perspiciatis atque hic aliquam vel, iste aliquid
            provident praesentium?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
            suscipit expedita aliquam quasi in corporis asperiores possimus
            repellat assumenda reiciendis, error similique aperiam adipisci
            maxime explicabo. Quo doloremque in vero quae suscipit quis
            exercitationem quia corrupti ducimus, earum fugiat et numquam maxime
            voluptatibus saepe eveniet? Aliquid consequuntur harum dolorum
            natus? Facilis expedita debitis ipsa deleniti voluptatem veniam
            quisquam dolorem fugiat distinctio aliquam doloribus incidunt a,
            necessitatibus cupiditate repudiandae soluta quos consequatur eos
            aperiam fuga! Aliquid expedita soluta corporis assumenda sunt,
            veniam in doloribus aliquam sequi nemo, esse ducimus doloremque!
            Suscipit nesciunt perspiciatis atque hic aliquam vel, iste aliquid
            provident praesentium?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
            suscipit expedita aliquam quasi in corporis asperiores possimus
            repellat assumenda reiciendis, error similique aperiam adipisci
            maxime explicabo. Quo doloremque in vero quae suscipit quis
            exercitationem quia corrupti ducimus, earum fugiat et numquam maxime
            voluptatibus saepe eveniet? Aliquid consequuntur harum dolorum
            natus? Facilis expedita debitis ipsa deleniti voluptatem veniam
            quisquam dolorem fugiat distinctio aliquam doloribus incidunt a,
            necessitatibus cupiditate repudiandae soluta quos consequatur eos
            aperiam fuga! Aliquid expedita soluta corporis assumenda sunt,
            veniam in doloribus aliquam sequi nemo, esse ducimus doloremque!
            Suscipit nesciunt perspiciatis atque hic aliquam vel, iste aliquid
            provident praesentium?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
            suscipit expedita aliquam quasi in corporis asperiores possimus
            repellat assumenda reiciendis, error similique aperiam adipisci
            maxime explicabo. Quo doloremque in vero quae suscipit quis
            exercitationem quia corrupti ducimus, earum fugiat et numquam maxime
            voluptatibus saepe eveniet? Aliquid consequuntur harum dolorum
            natus? Facilis expedita debitis ipsa deleniti voluptatem veniam
            quisquam dolorem fugiat distinctio aliquam doloribus incidunt a,
            necessitatibus cupiditate repudiandae soluta quos consequatur eos
            aperiam fuga! Aliquid expedita soluta corporis assumenda sunt,
            veniam in doloribus aliquam sequi nemo, esse ducimus doloremque!
            Suscipit nesciunt perspiciatis atque hic aliquam vel, iste aliquid
            provident praesentium?
          </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-4">
          <h1 className="mb-3 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-6">
              <Image
                src="userImg.jpeg"
                className="w-12 h-12 rounded-full object-cover"
                width="48"
                height="48"
              />
              <Link className="text-blue-800">John Doe</Link>
            </div>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur elit.
            </p>
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
                <Image src="instagram.svg" />
              </Link>
            </div>
          </div>
          <PostMenuActions />
          <h1 className="mt-6 mb-3 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/" className="underline">
              All
            </Link>
            <Link to="/" className="underline">
              Web Design
            </Link>
            <Link to="/" className="underline">
              Development
            </Link>
            <Link to="/" className="underline">
              Databases
            </Link>
            <Link to="/" className="underline">
              Search Engines
            </Link>
            <Link to="/" className="underline">
              Marketing
            </Link>
          </div>
          <h1 className="mt-6 mb-3 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default SinglePostPage;
