import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="">
        <h1 className="">React MySQL</h1>
        <ul className="">
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
