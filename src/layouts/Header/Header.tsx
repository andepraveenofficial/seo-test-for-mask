import { Link, Outlet } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <header>
        <nav
          style={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <Link to="/">First Page</Link>
          <Link to="/second-page">Second Page</Link>
          <Link to="/third-page">Third Page</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export const HeaderLayout = Header;
