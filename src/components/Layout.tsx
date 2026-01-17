import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/users">Users</Link> |{" "}
        <Link to="/counter">Counter</Link> | <Link to="/search">Search</Link>
      </nav>
      <Outlet />
    </>
  );
}
