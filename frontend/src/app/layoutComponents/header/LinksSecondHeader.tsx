import Link from "next/link";

const LinksSecondHeader: React.FC = () => {
  return (
    <>
      <nav className="flex items-center justify-center">
        <ul className="flex items-center justify-around">
          <li className="mx-24">
            <Link href="/">How It Works</Link>
          </li>
          <li className="mx-24">
            <Link href="/">Features</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default LinksSecondHeader;
