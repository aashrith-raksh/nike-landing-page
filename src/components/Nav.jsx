import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8">
      <nav className="flex outline-dashed justify-between max-container items-center">
        <a>
          <img src={headerLogo} alt="Logo" width={130} height={30}></img>
        </a>

        <ul className="flex justify-between items-center gap-16 ring-2 ring-dodgerblue max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}><a href={link.href} className="text-slate-gray text-lg font-montserrat leading-normal">
              {link.label}
            </a></li>
          ))}
        </ul>

        <div className="block lg:hidden">
          <img width={25} height={25} alt="Menu" src={hamburger}></img>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
