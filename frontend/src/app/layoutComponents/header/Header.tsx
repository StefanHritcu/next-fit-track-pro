import Link from "next/link";

const Header: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-around">
        {/* LOGO LINK */}
        <Link href="/">
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
      </div>
    </>
  );
};
export default Header;
