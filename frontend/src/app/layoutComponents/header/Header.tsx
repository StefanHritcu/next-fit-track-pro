import Link from "next/link";
import LinksSecondHeader from "./LinksSecondHeader";

const Header: React.FC = () => {
  return (
    <>
      <header className="flex flex-col bg-gray-900 text-gray-300">
        <section className="flex justify-around items-center">
          {/* LOGO LINK */}
          <Link
            href="/"
            className="text-4xl p-4 hover:scale-105 transfrom-transition duration-300"
          >
            <h1>Fit Track Pro</h1>
          </Link>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/shop">Shop</a>
              </li>
            </ul>
          </nav>
        </section>
        <LinksSecondHeader />
      </header>
    </>
  );
};
export default Header;
