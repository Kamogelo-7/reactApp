const Header = () => {
  const h1 = "tracker ";
  return (
    <header className="header bg-black/30 backdrop-blur-sm text-white  p-1.5 capitalize border-b-1 border-black">
      <nav className="navBar">
        <h1>
          {h1} {"🔰"}
        </h1>
        <ul className="flex justify-center md:border-1 p-1.5 rounded-full border-white items-center space-x-5 sticky top-0 bg-black/30 backdrop-blur-sm right-2/5 md:transform md:-translate-x-1/12 sm:px-8">
          <li>home</li>
          <li>contact</li>
          <li>about us</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
