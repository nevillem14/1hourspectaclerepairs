import { Link } from "react-router";

const Logo = () => {
  return (
    <div className="md:flex-grow md:text-center">
      <Link to="/" className="inline-block">
        <img
          src="/images/davids-arts-and-crafts-logo-white-1.webp"
          alt="Logo"
          className="h-5 md:h-10 transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </Link>
    </div>
  );
};

export default Logo;
