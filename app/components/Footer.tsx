// app/components/Footer.tsx
import { Link } from "react-router";
import Logo from "~/components/Logo";

export default function Footer() {
  return (
    <section className="mt-16 bg-black p-2">
      <div className="pt-10 flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between md:gap-0">
        <div className="flex flex-col gap-4 items-center md:items-start">
          <div className="md:flex-grow md:text-center">
            {/* Logo */}
            <div className="ml-4 mt-4">
              <Logo className="" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
          {/*<Link to="/" className="hover:text-blue-600">
            Home Page
          </Link>

          <Link to="/contact" className="hover:text-blue-600">
            Contact
          </Link>

          <Link to="/termsOfUse" className="hover:text-blue-600">
            Terms of Use
          </Link>

          <Link to="/privacyPolicy" className="hover:text-blue-600">
            Privacy Policy
          </Link>

          <Link to="/how-to-purchase" className="hover:text-blue-600">
            How to order
          </Link>*/}
        </div>
        <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start"></div>
      </div>
      <div className="flex-1 flex flex-col justify-start md:justify-center items-center pt-10">
        <p className="text-sm">
          Copyright &copy; 2019 - {new Date().getFullYear()} | WSDXI (Pty) Ltd
        </p>
      </div>
    </section>
  );
}
