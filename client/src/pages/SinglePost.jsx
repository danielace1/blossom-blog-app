import { Link } from "react-router-dom";
import Image from "../components/Image";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";

const SinglePost = () => {
  return (
    <div className="mt-5 flex flex-col gap-7">
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link to="" className="text-blue-800">
              John Doe
            </Link>
            <span>on</span>
            <Link to="" className="text-blue-800">
              Web Design
            </Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            quis inventore commodi, nulla dolore eos nihil esse iusto sequi
            consequatur beatae delectus sint, voluptate odio, possimus deleniti
            repellat repellendus soluta.
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src={"postImg.jpeg"} className={"rounded-2xl"} w={"600"} />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
            sunt ratione veritatis molestiae exercitationem non vel ea veniam,
            minus similique omnis tempora, placeat nesciunt. Veniam voluptatum
            sequi asperiores numquam iste! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Nostrum sunt ratione veritatis
            molestiae exercitationem non vel ea veniam, minus similique omnis
            tempora, placeat nesciunt. Veniam voluptatum sequi asperiores
            numquam iste!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
            sunt ratione veritatis molestiae exercitationem non vel ea veniam,
            minus similique omnis tempora, placeat nesciunt. Veniam voluptatum
            sequi asperiores numquam iste! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Nostrum sunt ratione veritatis
            molestiae exercitationem non vel ea veniam, minus similique omnis
            tempora, placeat nesciunt. Veniam voluptatum sequi asperiores
            numquam iste!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
            sunt ratione veritatis molestiae exercitationem non vel ea veniam,
            minus similique omnis tempora, placeat nesciunt. Veniam voluptatum
            sequi asperiores numquam iste! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Nostrum sunt ratione veritatis
            molestiae exercitationem non vel ea veniam, minus similique omnis
            tempora, placeat nesciunt. Veniam voluptatum sequi asperiores
            numquam iste!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
            sunt ratione veritatis molestiae exercitationem non vel ea veniam,
            minus similique omnis tempora, placeat nesciunt. Veniam voluptatum
            sequi asperiores numquam iste! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Nostrum sunt ratione veritatis
            molestiae exercitationem non vel ea veniam, minus similique omnis
            tempora, placeat nesciunt. Veniam voluptatum sequi asperiores
            numquam iste!
          </p>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
            sunt ratione veritatis molestiae exercitationem non vel ea veniam,
            minus similique omnis tempora, placeat nesciunt. Veniam voluptatum
            sequi asperiores numquam iste! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Nostrum sunt ratione veritatis
            molestiae exercitationem non vel ea veniam, minus similique omnis
            tempora, placeat nesciunt. Veniam voluptatum sequi asperiores
            numquam iste!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
            sunt ratione veritatis molestiae exercitationem non vel ea veniam,
            minus similique omnis tempora, placeat nesciunt. Veniam voluptatum
            sequi asperiores numquam iste! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Nostrum sunt ratione veritatis
            molestiae exercitationem non vel ea veniam, minus similique omnis
            tempora, placeat nesciunt. Veniam voluptatum sequi asperiores
            numquam iste!
          </p>
        </div>

        <div className="px-4 h-max sticky top-5">
          <h1 className="mb-3 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-5">
              <Image
                src={"userImg.jpeg"}
                className={"w-12 h-12 rounded-full object-cover"}
                w="48"
                h="48"
              />
              <Link to="" className="text-blue-800">
                John Doe
              </Link>
            </div>

            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            </p>

            <div className="flex gap-2">
              <Link to="">
                <Image src="facebook.svg" />
              </Link>
              <Link to="">
                <Image src="instagram.svg" />
              </Link>
            </div>
          </div>
          <PostMenuActions />
          <h1 className="mt-6 mb-3 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline">Web Design</Link>
            <Link className="underline">Development</Link>
            <Link className="underline">Databases</Link>
            <Link className="underline">Search Engines</Link>
          </div>
          <h1 className="mt-7 mb-3 text-sm font-medium">Search </h1>
          <Search />
        </div>
      </div>
      <Comments />
    </div>
  );
};
export default SinglePost;
