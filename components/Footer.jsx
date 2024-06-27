import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-4 text-white mt-14">
      <div className="container mx-auto">
        <hr className="border-gray-700 mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center mb-2">
          <span className="mb-2 md:mb-0">{new Date().getFullYear()} &copy; All Rights Reserved.</span>
          <div>
            <Link href="mailto:devub8@gmail.com">Devesh Borkar &#128640;</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
