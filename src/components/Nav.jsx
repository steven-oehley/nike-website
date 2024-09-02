import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x absolute z-10 w-full py-8">
      <nav className="max-container flex items-center justify-between">
        <a href="/">
          <img src={headerLogo} alt="Nike Logo" width={130} height={29} />
        </a>
        <ul className="hidden flex-1 items-center justify-center gap-16 lg:flex">
          {navLinks.map((linkItem) => (
            <li key={linkItem.label}>
              <a
                href={linkItem.href}
                className="font-montserrat text-lg leading-normal text-slate-500 hover:text-coral-red"
              >
                {linkItem.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="block text-slate-500 lg:hidden">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};
export default Nav;
