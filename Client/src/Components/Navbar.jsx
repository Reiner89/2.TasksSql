import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="relative bg-zinc-700 flex flex-col">
        <div className="titulo flex justify-center text-white text-3xl">
          <h1 className="">React MySQL</h1>
        </div>
        <ul className="relative flex justify-between w-[50%]">
          <li className="">
            <Link to="/">Home</Link>
          </li>
          <li className="">
            <Link to="/new">Create Task</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
