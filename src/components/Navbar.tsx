import { useState } from "react";
import logo from "../assets/logo.svg";
import smallLogo from "../assets/logo-small.svg";

const navList = [
  {
    name: "How it Works",
    link: "/",
  },
  {
    name: "Pricing",
    link: "/",
  },
  {
    name: "Use Case",
    link: "/",
  },
  {
    name: "FAQ",
    link: "/",
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative flex lg:w-625/1000 w-[90%] 3xl:mt-40 justify-between bg-white lg:p-5 p-4 font-open-sans font-medium nav-shadow rounded-full items-center">
      <img src={logo} alt="Logo" className="hidden lg:block" />
      <img src={smallLogo} alt="Logo" className="lg:hidden" />
      <ul className="hidden lg:flex 2xl:text-base text-sm items-center gap-2 2xl:gap-4">
        {navList.map((link) => (
          <li
            key={link.name}
            className="py-2 px-3 hover:text-black transition-colors text-slate-gray"
          >
            <a className="cursor-default" href={link.link}>
              {" "}
              {link.name}{" "}
            </a>
          </li>
        ))}
      </ul>
      <button className="hidden overflow-hidden animated-button contact-button relative hover:text-system-blue hover:shadow-[0_4px_12px_rgba(29,32,38,0.08),0_1px_2px_rgba(29,32,38,0.04)] transition-all lg:block bg-system-blue text-white rounded-[44px] cursor-pointer py-2.75 px-4.5">
        <p className="button-text">Contact Sales</p>
      </button>
      <button
        className="lg:hidden flex flex-col gap-1.5 w-6 h-6 justify-center items-center"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`w-full h-0.5 bg-neutral-900 transition-transform ${
            isMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`w-full h-0.5 bg-neutral-900 transition-opacity ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`w-full h-0.5 bg-neutral-900 transition-transform ${
            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full mt-2 left-0 right-0 bg-white rounded-3xl nav-shadow p-6 z-50">
          <ul className="flex flex-col gap-4">
            {navList.map((link) => (
              <li
                key={link.name}
                className="text-slate-gray hover:text-black transition-colors"
              >
                <a
                  href={link.link}
                  className="cursor-default"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <button className="w-full mt-4 bg-system-blue text-white rounded-[44px] cursor-pointer py-2.75 px-4.5">
            Contact Sales
          </button>
        </div>
      )}
    </nav>
  );
}
