import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="mt-4 flex flex-col mb-10">
      <Link to="/">
        <h1 className="text-3xl font-light text-balance text-center mb-6 tracking-[0.4rem]">
          BENITA VASKELAITĖ
        </h1>
      </Link>
      <ul className="flex align-center justify-center gap-4">
        <li>
          <Link className="text-lg hover:underline" to="/">
            Work
          </Link>
        </li>
        <li>
          <Link className="text-lg hover:underline" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="text-lg hover:underline" to="/contacts">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
