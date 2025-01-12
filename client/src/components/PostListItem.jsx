import { Link } from "react-router-dom";
import Image from "../components/Image";

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-4 md:gap-8">
      <div className="md:hidden xl:block xl:w-1/3">
        <Image
          src={"postImg.jpeg"}
          className={"rounded-2xl object-cover"}
          w={"743"}
        />
      </div>
      <div className="flex flex-col gap-3 xl:w-2/3">
        <Link to={"/test"} className="text-2xl md:text-3xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link to={""} className="text-blue-500">
            John Doe
          </Link>
          <span>on</span>
          <Link to={""} className="text-blue-500">
            Web Design
          </Link>
          <span>2 days ago</span>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          accusantium distinctio, nam fugit provident quaerat odio ab debitis
          sint porro? Corrupti amet consequuntur aliquam quidem magnam aut quis
          obcaecati pariatur?
        </p>
        <Link to={"/test"} className="text-blue-800 text-sm underline">
          Read More
        </Link>
      </div>
    </div>
  );
};
export default PostListItem;
