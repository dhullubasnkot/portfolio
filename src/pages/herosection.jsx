import { useState } from "react";
import ItBerries from "./ITBerries";

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="hero" className="w-full overflow-x-hidden max-w-screen ">
      <nav className="w-full h-[66px] flex font-bold text-[17px] relative z-50">
        <div className="w-1/2 bg-[#f2f2f2] flex items-center pl-4 sm:pl-6 md:pl-12">
          <img src="/logo.svg" alt="Logo" className="h-6 sm:h-7" />
        </div>

        <div className="w-1/2 bg-black text-white hidden sm:flex justify-end items-center px-4 md:px-8 lg:px-12 gap-4 md:gap-10 lg:gap-16 xl:gap-20">
          <a href="#about" className="hover:text-gray-300 transition">
            About me
          </a>
          <a href="#skills" className="hover:text-gray-300 transition">
            Skills
          </a>
          <a href="#portfolio" className="hover:text-gray-300 transition">
            Portfolio
          </a>
          <a
            href="#contact"
            className="bg-white text-black px-3 md:px-4 py-1 rounded-full text-xs font-semibold hover:bg-gray-200 transition"
          >
            CONTACT ME
          </a>
        </div>

        <div className="w-1/2 bg-black text-white flex sm:hidden justify-end items-center pr-4">
          <button className="text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="absolute top-[66px] left-0 w-full bg-black/80 text-white flex flex-col items-center gap-6 py-6 sm:hidden z-50">
          <a
            href="#about"
            className="hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            About me
          </a>
          <a
            href="#skills"
            className="hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="#portfolio"
            className="hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="bg-white text-black px-4 py-1 rounded-full text-xs font-semibold hover:bg-gray-200 transition"
            onClick={() => setMenuOpen(false)}
          >
            CONTACT ME
          </a>
        </div>
      )}

      <section className="w-full min-h-screen flex flex-col sm:flex-row">
        <div className="hidden sm:flex w-full sm:w-1/2 bg-[#f2f2f2] flex-col justify-center px-6 md:px-10 lg:px-16 xl:px-20">
          <h3 className="text-sm md:text-base text-gray-600 mb-2">Hi, I am</h3>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2">
            Tomasz Gajda
          </h1>
          <h2 className="text-gray-500 text-xs md:text-sm lg:text-base mb-6">
            Front-end Developer / UI Designer
          </h2>
          <div className="flex gap-3 md:gap-4">
            <a
              href="#"
              className="w-8 h-8 bg-black text-white flex items-center justify-center rounded"
            >
              @
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-black text-white flex items-center justify-center rounded"
            >
              GH
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-black text-white flex items-center justify-center rounded"
            >
              in
            </a>
          </div>
        </div>

        <div
          className="sm:hidden w-full bg-cover bg-center relative text-white"
          style={{ backgroundImage: "url('/profilemobile.png')" }}
        >
          <div className="w-full h-full min-h-[90vh] relative flex flex-col items-center justify-center px-6 py-10 ">
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 flex flex-col items-center justify-center text-center w-full mt-[500px] bg-black/20">
              <p className="text-sm">my name is Thomas</p>
              <h1 className="text-2xl font-bold leading-tight mb-4">
                I'M A DEVELOPER
              </h1>

              <div className="flex gap-6 justify-center mb-6">
                <a href="#">
                  <img src="/icon-github.svg" className="w-6" alt="GitHub" />
                </a>
                <a href="#">
                  <img src="/icon-twitter.svg" className="w-6" alt="Twitter" />
                </a>
                <a href="#">
                  <img
                    src="/icon-linkedin.svg"
                    className="w-6"
                    alt="LinkedIn"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden sm:flex w-full sm:w-1/2 bg-black items-end justify-center">
          <img
            src="/image 17.png"
            alt="Tomasz Gajda"
            className="w-[80%] max-w-[400px] md:max-w-[500px] object-contain z-10"
          />
        </div>
      </section>

      <ItBerries />
    </div>
  );
}
