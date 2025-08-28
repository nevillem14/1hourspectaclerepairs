import { Link } from "react-router";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`md:flex-grow md:text-center ${className ?? ""}`}>
      <Link to="/" className="inline-block">
        <img
          src="/images/wsdxi-logo-2-white.png"
          alt="Logo"
          className="h-5 md:h-10 transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </Link>
    </div>
  );
};

export default Logo;
